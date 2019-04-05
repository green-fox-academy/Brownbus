import { Component, OnInit } from "@angular/core";

import { ApiFetcherService } from "src/api-fetcher.service";
import { weatherIcon } from "../weatherIconChooser";
import { TilesComponent } from '../tiles/tiles.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: "app-forecast",
  templateUrl: "./forecast.component.html",
  styleUrls: ["./forecast.component.css"]
})
export class ForecastComponent implements OnInit {
  resp: string = ''
  value: string = '';
  temperature: string[] = [];
  name: string[] = [];
  weatherIcon: string[] = [];
  desc: string[] = [];
  url:string = ''
  appId = 'fef19bc203ee937d5506cce5cf6ba656';
  constructor(private svc: ApiFetcherService) {}
  getWeatherStuff() {
    let urlIdentifier: number = parseInt(this.value);
    if (!isNaN(urlIdentifier)) {
      this.url = `http://api.openweathermap.org/data/2.5/forecast?id=${
        this.value
      }&appid=${this.appId}`;
    } else {
      this.url = `http://api.openweathermap.org/data/2.5/forecast?q=${
        this.value
      }&appid=${this.appId}`;
    }
    let myWeather = this.svc.toFetch(this.url);
    myWeather.subscribe((weatherData: any) => {
      console.log(weatherData);
      for (let i = 0; i < 5; i -= -1) {
        this.name = weatherData.body.city.name;
        this.weatherIcon[i] = weatherIcon(
          weatherData.body.list[i * 5].weather[0]
        );
        this.temperature[i] = `${Math.round(
          weatherData.body.list[i * 5].main.temp - 273
        )}℃`;
        this.desc[i] = weatherData.body.list[i * 5].weather[0].description;
      }
      this.resp = ''
    },(error: HttpErrorResponse)=>{
      if(error.status === 404){
        let myError = new Error("City is not found")
        this.resp = myError.message
        return `${error.status} ${error.message}`
      }else{
        console.log(error.status)
        let myError = new Error('You have used this service a bit too much, leave it be for some time')
        console.log(myError.message)
        this.resp = myError.message
        return `${error.status} ${error.message}`
      }
    })
  }
  something() {
    console.log(this.value);
  }
  setValue(id: number) {
    this.value = id.toString();
    this.getWeatherStuff();
  }
  ngOnInit() {
  }
}
