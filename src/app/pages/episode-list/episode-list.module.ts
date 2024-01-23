import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodeListPageRoutingModule } from './episode-list-routing.module';

import { EpisodeListPage } from './episode-list.page';
import {SharedModule} from "../../shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EpisodeListPageRoutingModule,
        SharedModule
    ],
  declarations: [EpisodeListPage]
})
export class EpisodeListPageModule {}
