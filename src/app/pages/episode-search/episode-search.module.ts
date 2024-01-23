import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpisodeSearchPageRoutingModule } from './episode-search-routing.module';

import { EpisodeSearchPage } from './episode-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpisodeSearchPageRoutingModule
  ],
  declarations: [EpisodeSearchPage]
})
export class EpisodeSearchPageModule {}
