import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

//components

import {CharacterCardDetailComponent} from "./components/character-card-detail/character-card-detail.component";
import {CharacterCardListComponent} from "./components/character-card-list/character-card-list.component";
import {PagesButtonsComponent} from "./components/pages-buttons/pages-buttons.component";
import {EpisodeCardDetailComponent} from "./components/episode-card-detail/episode-card-detail.component";
import {LocationCardDetailComponent} from "./components/location-card-detail/location-card-detail.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule
  ],
  declarations: [
    CharacterCardDetailComponent,
    CharacterCardListComponent,
    PagesButtonsComponent,
    EpisodeCardDetailComponent,
    LocationCardDetailComponent
  ],
  exports: [
    CharacterCardDetailComponent,
    CharacterCardListComponent,
    PagesButtonsComponent,
    EpisodeCardDetailComponent,
    LocationCardDetailComponent,
    RouterModule
  ]
})

export class SharedModule {}
