import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { TilesComponent } from './tiles/tiles.component';
import { CitiesComponent } from './cities/cities.component';
import { ForecastComponent } from './forecast/forecast.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { DashoboardComponent } from './dashoboard/dashoboard.component';


const routes: Routes = [ 
  {path: '', component: TilesComponent},
  {path: 'dashboard/:id', component: DashoboardComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TilesComponent,
    CitiesComponent,
    ForecastComponent,
    DashoboardComponent
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      /* { enableTracing: true } */
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
