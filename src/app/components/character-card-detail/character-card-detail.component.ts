import {Component, OnInit, Input} from '@angular/core';

//models
import {Character} from '../../models/characters';
import {Episode} from '../../models/episodes';
import {Location} from '../../models/locations';

//services
import {EpisodeService} from '../../service/episode/episode.service';
import {LocationService} from '../../service/location/location.service';

@Component({
    selector: 'app-character-card-detail',
    templateUrl: './character-card-detail.component.html',
    styleUrls: ['./character-card-detail.component.scss'],
})
export class CharacterCardDetailComponent implements OnInit {

    @Input() character: Character = {} as Character;


    firstEpisode!: Episode;
    origin!: Location;
    lastKnownLocation!: Location;

    constructor(
        private _episodeService: EpisodeService,
        private _locationService: LocationService
    ) {
    }

    ngOnInit() {
        if (this.character.origin.url.length > 0) {
            this._locationService.getLocationByURL(this.character.origin.url)
                .subscribe((location: Location) => {
                    this.origin = location;
                });

        }

        if (this.character.location.url.length > 0) {
            this._locationService.getLocationByURL(this.character.location.url)
                .subscribe((location: Location) => {
                    this.lastKnownLocation = location;
                });
        }

        this._episodeService.getEpisodeByURL(this.character.episode[0])
            .subscribe((episode: Episode) => {
                this.firstEpisode = episode;
            });
    }
}
