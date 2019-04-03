import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeattleComponent } from './tiles/seattle/seattle.component';
import { MiamiComponent } from './tiles/miami/miami.component';
import { BarcelonaComponent } from './tiles/barcelona/barcelona.component';
import { LondonComponent } from './tiles/london/london.component';
import { BudapestComponent } from './tiles/budapest/budapest.component';
import { HttpClient } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { TilesComponent } from './tiles/tiles.component';

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    MiamiComponent,
    BarcelonaComponent,
    LondonComponent,
    BudapestComponent,
    SearchComponent,
    TilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
