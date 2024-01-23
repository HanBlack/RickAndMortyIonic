import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpisodeSearchPage } from './episode-search.page';

const routes: Routes = [
  {
    path: '',
    component: EpisodeSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodeSearchPageRoutingModule {}
