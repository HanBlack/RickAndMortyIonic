import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

//models

import {Character} from "../../models/characters";

//service
import {CharacterService} from "../../service/character/character.service";

@Component({
    selector: 'app-character-search',
    templateUrl: './character-search.page.html',
    styleUrls: ['./character-search.page.scss'],
})
export class CharacterSearchPage implements OnInit {

    // Properties
    charactersFiltered:Character[] = [];
    textbus!:string;

    constructor( private route:ActivatedRoute,
                 private _characterService:CharacterService,
                 private navCtrl:NavController ) { }

    ngOnInit() {

        this.route.params.subscribe( (params) => {
            this.textbus = params['texto'];

            this._characterService.searchCharacters(this.textbus);

            this.charactersFiltered = this._characterService.allCharactersFiltered;

            if(this.charactersFiltered.length == 0){
                this.navCtrl.back();
            }

        })

    }

    // Methods
    // Return back to the last page
    volver(){
        this.navCtrl.back();
    }

}
