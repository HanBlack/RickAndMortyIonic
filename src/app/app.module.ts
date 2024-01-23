import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {TabButtonsComponent} from "./components/tab-buttons/tab-buttons.component";
import {AppRoutingModule} from './app-routing.module';

//import services
import {CharacterService} from "./service/character/character.service";
import {EpisodeService} from "./service/episode/episode.service";
import {LocationService} from "./service/location/location.service";

//HttpClient
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, TabButtonsComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [CharacterService, LocationService, EpisodeService, {
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy
  }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
