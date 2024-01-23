import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'character-list',
    loadChildren: () => import('./pages/character-list/character-list.module').then( m => m.CharacterListPageModule)
  },
  {
    path: 'character-details/:id',
    loadChildren: () => import('./pages/character-details/character-details.module').then( m => m.CharacterDetailsPageModule)
  },
  {
    path: 'character-search/:texto',
    loadChildren: () => import('./pages/character-search/character-search.module').then( m => m.CharacterSearchPageModule)
  },
  {
    path: 'episode-list',
    loadChildren: () => import('./pages/episode-list/episode-list.module').then( m => m.EpisodeListPageModule)
  },
  {
    path: 'episode-details/:id',
    loadChildren: () => import('./pages/episode-details/episode-details.module').then( m => m.EpisodeDetailsPageModule)
  },
  {
    path: 'episode-search/:texto',
    loadChildren: () => import('./pages/episode-search/episode-search.module').then( m => m.EpisodeSearchPageModule)
  },
  {
    path: 'location-list',
    loadChildren: () => import('./pages/location-list/location-list.module').then( m => m.LocationListPageModule)
  },
  {
    path: 'location-details/:id',
    loadChildren: () => import('./pages/location-details/location-details.module').then( m => m.LocationDetailsPageModule)
  },
  {
    path: 'location-search/:texto',
    loadChildren: () => import('./pages/location-search/location-search.module').then( m => m.LocationSearchPageModule)
  },
  {
    path: '**',
    redirectTo: 'character-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
