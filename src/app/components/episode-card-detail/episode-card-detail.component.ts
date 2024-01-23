import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

//models
import {Character} from "../../models/characters";
import {Episode} from "../../models/episodes";

//services
import {CharacterService} from "../../service/character/character.service";

@Component({
    selector: 'app-episode-card-detail',
    templateUrl: './episode-card-detail.component.html',
    styleUrls: ['./episode-card-detail.component.scss'],
})
export class EpisodeCardDetailComponent implements OnInit {

    // Input parameters
    @Input() episode!:Episode;

    // Parameters
    characters!:Character[];

    constructor( private _characterService:CharacterService,
                 private router:Router ) { }

    ngOnInit() {

        this.characters = [];

        this.episode.characters.forEach( (characterURL) => {
            this.getCharacter(characterURL);
        });

    }

    // Methods
    // Navigates to the character selected detail page
    characterDetails(id:number){
        this.router.navigate(['character-details', id]);
    }

    // Add a character to resident list
    private getCharacter(url:string){
        this._characterService.getCharacterByURL(url)
            .subscribe( (character:Character) => {
                this.characters.push(character);
            });
    }

}
