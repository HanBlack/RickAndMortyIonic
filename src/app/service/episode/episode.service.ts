import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

//models
import {EpisodeResults} from "../../models/episode-results";
import {Episode} from "../../models/episodes";

@Injectable({
    providedIn: 'root'
})
export class EpisodeService {

    allEpisodes: Episode[] = [];
    allEpisodesFiltered: Episode[] = [];
    loaded: boolean = false;
    url: string = "https://rickandmortyapi.com/api/episode";

    constructor(private http: HttpClient) {
        this.loadEpisodes();
    }

    // get all the episodes
    getEpisodes(page: number): Observable<EpisodeResults> {
        // makes an api call to get all episodes
        return this.http.get<EpisodeResults>(`${this.url}/?page=${page}`);
    }

    // get a single episode by id
    getEpisode(id: number): Observable<Episode> {
        if (id) {
            // makes an api call to get a single character
            return this.http.get<Episode>(`${this.url}/${id}`);
        } else {
            // Handle the case where id is falsy (e.g., 0)
            // You might want to throw an error or return a default value.
            return new Observable<Episode>();
        }
    }

    // get a single episode by url
    getEpisodeByURL(url: string): Observable<Episode> {
        if (url) {
            return this.http.get<Episode>(url);
        } else {
            // Handle the case where url is falsy
            // You might want to throw an error or return a default value.
            return new Observable<Episode>();
        }
    }

    // Search all the locations containing the string
    searchLocations(text: string) {
        if (this.allEpisodes.length === 0) {
            this.loadEpisodes().then(() => {
                this.filterEpisodes(text);
            })
        } else {
            this.filterEpisodes(text);
        }
    }

    // Load all the locations from all pages
    private loadEpisodes() {
        return new Promise((resolve, reject) => {
            this.http.get<EpisodeResults>(this.url).subscribe((result: EpisodeResults) => {
                if (result.info) {
                    let numPages = result.info.pages;

                    for (let i = 1; i <= numPages; i++) {
                        this.getEpisodes(i).subscribe((episodeResult: EpisodeResults) => {
                            let pageLocations = episodeResult.results;

                            pageLocations.forEach((character) => {
                                this.allEpisodes.push(character);
                            });
                        });
                    }

                    this.loaded = true;
                }
            })
        });
    }

    // Find the locations containing the string
    private filterEpisodes(text: string) {
        this.allEpisodesFiltered = [];
        text = text.toLowerCase();

        this.allEpisodes.forEach((episode) => {
            let nameLower = episode.name.toLowerCase();
            let numEp = episode.episode.toLowerCase();

            if (nameLower.indexOf(text) >= 0 || numEp.indexOf(text) >= 0) {
                this.allEpisodesFiltered.push(episode);
            }
        });
    }
}
