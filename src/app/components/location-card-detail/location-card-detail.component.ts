import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//models

import {Character} from "../../models/characters";
import {Location} from "../../models/locations";

//services

import {CharacterService} from "../../service/character/character.service";

@Component({
  selector: 'app-location-card-detail',
  templateUrl: './location-card-detail.component.html',
  styleUrls: ['./location-card-detail.component.scss'],
})
export class LocationCardDetailComponent implements OnInit {

  // Input parameters
  @Input() location: Location = {} as Location;

  // Parameters
  residents: Character[] = [];

  constructor( private _characterService:CharacterService,
               private router:Router ) { }

  ngOnInit() {

    this.residents = [];

    this.location.residents.forEach( (residentURL) => {
      this.getResident(residentURL);
    });

  }

  // Methods
  // Navigates to the character selected detail page
  characterDetails(id:number){
    this.router.navigate(['character-details', id]);
  }

  // Navigates to the character details page
  residentDetails(id:number){
    this.router.navigate(['character-details', id]);
  }

  // Add a character to resident list
  private getResident(url:string){
    this._characterService.getCharacterByURL(url)
      .subscribe( (character:Character) => {
        this.residents.push(character);
      });
  }

}
