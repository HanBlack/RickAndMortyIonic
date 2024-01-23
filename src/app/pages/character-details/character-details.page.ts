import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { Observable } from "rxjs";

//models
import { Character } from "../../models/characters";

//services
import { CharacterService } from "../../service/character/character.service";

@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    // Properties
    character: Character = {} as Character;

    character$!: Observable<Character>; // observable para pipe async

    constructor(
        private route: ActivatedRoute,
        private _characterService: CharacterService,
        private navCtrl: NavController
    ) { }

    ngOnInit() {

        this.route.params.subscribe((params) => {
            this.character$ = this._characterService.getCharacter(params['id']);
            this.character$.subscribe((character) => {
                this.character = character;
            });
        });

    }

    // Methods
    // Return back to the last page
    volver() {
        this.navCtrl.back();
    }

}
