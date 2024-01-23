import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController} from '@ionic/angular';

//models

import {Episode} from "../../models/episodes";

//services
import {EpisodeService} from "../../service/episode/episode.service";

@Component({
    selector: 'app-episode-search',
    templateUrl: './episode-search.page.html',
    styleUrls: ['./episode-search.page.scss'],
})
export class EpisodeSearchPage implements OnInit {

    // Properties
    episodesFiltered: Episode[] = [];
    textoBuscado: string = '';

    constructor(private route: ActivatedRoute,
                private _episodeService: EpisodeService,
                private navCtrl: NavController,
                private router: Router) {
    }

    ngOnInit() {

        this.route.params.subscribe((params) => {
            this.textoBuscado = params['texto'];

            this._episodeService.searchLocations(this.textoBuscado);

            this.episodesFiltered = this._episodeService.allEpisodesFiltered;

            if (this.episodesFiltered.length == 0) {
                this.navCtrl.back();
            }
        })
    }

    // Methods
    // Navigates to the episode details page
    episodeDetails(id: number) {
        this.router.navigate(['/episode-details', id]);
    }

    // Return back to the last page
    volver() {
        this.navCtrl.back();
    }

}
