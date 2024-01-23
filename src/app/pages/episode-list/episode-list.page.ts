import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

// models
import {Episode} from "../../models/episodes";
import {EpisodeResults} from "../../models/episode-results";

// services
import {EpisodeService} from "../../service/episode/episode.service";

@Component({
    selector: 'app-episode-list',
    templateUrl: './episode-list.page.html',
    styleUrls: ['./episode-list.page.scss'],
})
export class EpisodeListPage implements OnInit {

    // Properties
    episodeResults!: EpisodeResults;
    episodeList!: Episode[];
    page: number = 1;

    constructor(private _episodeService: EpisodeService,
                private router: Router) {
    }

    ngOnInit() {

        this.getEpisodeResults(this.page);

    }

    // Methods
    // Navigates to the details of the episode selected
    episodeDetails(id: number) {
        this.router.navigate(['/episode-details', id]);
    }

    // Search episodes containing the string
    searchEpisode(text: string | null | undefined) {
        if (text && text.length > 0) {
            this.router.navigate(['/episode-search', text]);
        }
    }

    // Get the characters of the next or prev page
    pageMove(page: number) {
        this.getEpisodeResults(page);
    }

    // Suscribe to the observable and get de episode results
    private getEpisodeResults(page: number) {
        this._episodeService.getEpisodes(page)
            .subscribe((result: EpisodeResults) => {
                this.episodeResults = result;
                this.episodeList = this.episodeResults.results;
            });
    }
}
