import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterDetailsPageRoutingModule } from './character-details-routing.module';

import { CharacterDetailsPage } from './character-details.page';
import {SharedModule} from 'src/app/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [CharacterDetailsPage]
})
export class CharacterDetailsPageModule {}
