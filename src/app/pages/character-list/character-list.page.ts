import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

//models

import {CharacterResults} from "../../models/character-results";
import {Character} from "../../models/characters";

//services

import {CharacterService} from "../../service/character/character.service";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.page.html',
  styleUrls: ['./character-list.page.scss'],
})
export class CharacterListPage implements OnInit {

  // Properties
  characterResults: CharacterResults = { results: [], info: { count: 0, pages: 0, next: '', prev: '' } };
  characterList: Character[] = [];
  page:number = 1;

  constructor( private _characterService:CharacterService,
               private router:Router ) { }

  ngOnInit() {

    this.getCharacterResults(this.page);

  }

  // Methods
  // Search characters containing the string
  searchCharacter(text: string | null | undefined){
    if(text && text.length){
      this.router.navigate(['/character-search', text]);
    }
  }

  // Get the characters of the next or prev page
  pageMove(page:number){
    this.getCharacterResults(page);
  }

  // Suscribe to the observable and get de character results
  private getCharacterResults(page:number){
    this._characterService.getCharacters(page)
        .subscribe( (result:CharacterResults) => {
          this.characterResults = result;
          this.characterList = this.characterResults.results;
        });
  }

}
