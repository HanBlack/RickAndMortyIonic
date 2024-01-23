import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodeDetailsPageRoutingModule } from './episode-details-routing.module';

import { EpisodeDetailsPage } from './episode-details.page';
import {SharedModule} from "../../shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EpisodeDetailsPageRoutingModule,
        SharedModule
    ],
  declarations: [EpisodeDetailsPage]
})
export class EpisodeDetailsPageModule {}
