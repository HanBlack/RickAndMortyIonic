import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterSearchPage } from './character-search.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterSearchPageRoutingModule {}
