import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationDetailsPageRoutingModule } from './location-details-routing.module';

import { LocationDetailsPage } from './location-details.page';
import {SharedModule} from "../../shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LocationDetailsPageRoutingModule,
        SharedModule
    ],
  declarations: [LocationDetailsPage]
})
export class LocationDetailsPageModule {}
