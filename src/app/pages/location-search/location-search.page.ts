import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NavController} from '@ionic/angular';

//models

import {LocationResults} from "../../models/location-result";
import {Location} from "../../models/locations";
//services
import {LocationService} from "../../service/location/location.service";

@Component({
    selector: 'app-location-search',
    templateUrl: './location-search.page.html',
    styleUrls: ['./location-search.page.scss'],
})
export class LocationSearchPage implements OnInit {

    // Properties
    locationsFiltered:Location[] = [];
    textoBuscado:string = '';

    constructor( private route:ActivatedRoute,
                 private _locationService:LocationService,
                 private navCtrl:NavController,
                 private router:Router ) { }

    ngOnInit() {

        this.route.params.subscribe( (params) => {
            this.textoBuscado = params['texto'];

            this._locationService.searchLocations(this.textoBuscado);

            this.locationsFiltered = this._locationService.allLocationsFiltered;

            if(this.locationsFiltered.length == 0){
                this.navCtrl.back();
            }
        })
    }

    // Methods
    // Navigates to the location details page
    locationDetails(id:number){
        this.router.navigate(['/location-details', id]);
    }

    // Return back to the last page
    volver(){
        this.navCtrl.back();
    }

}
