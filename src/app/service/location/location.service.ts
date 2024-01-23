import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//models

import {Location} from "../../models/locations";
import {LocationResults} from "../../models/location-result";


@Injectable({
  providedIn: 'root'
})
export class LocationService {

  allLocations:Location[] = [];
  allLocationsFiltered:Location[] = [];
  loaded:boolean = false;
  url:string = "https://rickandmortyapi.com/api/location";

  constructor( private http:HttpClient ) {
    this.loadLocations();
  }

  // get all locations
  getLocations(page:number):Observable<LocationResults>{
    // makes an api call to get all locations
    return this.http.get<LocationResults>(`${this.url}/?page=${page}`);
  }

  // get a single location by id
  // @ts-ignore
  getLocation(id:number):Observable<Location>{
    if(id){
      // makes an api call to get a single location
      return this.http.get<Location>(`${this.url}/${id}`);
    }
  }

  // get a single location by url
  // @ts-ignore
  getLocationByURL(url:string):Observable<Location>{
    if(url){
      return this.http.get<Location>(url);
    }
  }

  // Search all the locations containing the string
  searchLocations(text:string){
    if(this.allLocations.length === 0){
      this.loadLocations().then( () => {
        this.filterLocations(text);
      })
    }else{
      this.filterLocations(text);
    }
  }

  // Load all the locations from all pages
  private loadLocations(){
    return new Promise( (resolve, reject) => {
      this.http.get<LocationResults>(this.url).subscribe( (result:LocationResults) => {
        let numPages = result.info.pages;

        for(let i = 1; i <= numPages; i++){
          this.getLocations(i).subscribe( (locationResult:LocationResults) => {
            let pageLocations = locationResult.results;

            pageLocations.forEach( (character) =>{
              this.allLocations.push(character);
            });
          });
        }

        this.loaded = true;
      })
    });
  }

  // Find the locations containing the string
  private filterLocations(text:string){
    this.allLocationsFiltered = [];
    text = text.toLowerCase();

    this.allLocations.forEach( (location) => {
      let nameLower = location.name.toLowerCase();
      let typeLower = location.type.toLowerCase();

      if(nameLower.indexOf(text) >= 0 || typeLower.indexOf(text) >= 0){
        this.allLocationsFiltered.push(location);
      }
    });

  }
}
