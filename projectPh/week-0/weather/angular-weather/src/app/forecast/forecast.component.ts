import { Component, OnInit, Input } from '@angular/core';
import { ApiFetcherService } from 'src/api-fetcher.service';
import { Weather } from '../models/CurrentWeather';
import { weatherIcon } from '../weatherIconChooser';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  temperature: string[] = [] ;
  name: string[] = [];
  weatherIcon:string[] = [];
  desc:string[] = [];
  appId='fef19bc203ee937d5506cce5cf6ba656'
  constructor(private svc:ApiFetcherService) { }
  @Input('cityId') cityId:string
  getWeatherStuff(){
    let url = `http://api.openweathermap.org/data/2.5/forecast?id=${this.cityId}&appid=${this.appId}`
    let myWeather = this.svc.toFetch(url)
    myWeather.subscribe((weatherData:any)=>{
      console.log(weatherData)
       for(let i  = 0; i < 5; i-=-1){
        this.name = weatherData.body.city.name
        this.weatherIcon[i] = weatherIcon(weatherData.body.list[i*5].weather[0])
        this.temperature[i] = `${Math.round(weatherData.body.list[i*5].main.temp -273)}℃`
        this.desc[i] = weatherData.body.list[i*5].weather[0].description
      } 
    })
  }
  something(){
    console.log(this.cityId)
  }
  ngOnInit() {
    this.something()
    this.getWeatherStuff()

  }

}
