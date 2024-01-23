import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CharacterSearchPageRoutingModule } from './character-search-routing.module';
import { CharacterSearchPage } from './character-search.page';
import {SharedModule} from "../../shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CharacterSearchPageRoutingModule,
        SharedModule
    ],
  declarations: [CharacterSearchPage]
})
export class CharacterSearchPageModule {}
