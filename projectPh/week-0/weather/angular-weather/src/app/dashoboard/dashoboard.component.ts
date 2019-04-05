import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiFetcherService } from 'src/api-fetcher.service';
import { weatherIcon } from '../weatherIconChooser';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashoboard',
  templateUrl: './dashoboard.component.html',
  styleUrls: ['./dashoboard.component.css']
})
export class DashoboardComponent implements OnInit {
  constructor(private route:ActivatedRoute,
    private svc:ApiFetcherService
    ){}
  url: string = '';
  cityIdentifier: string = ''
  resp: string = ''
  value: string = '';
  temperature: string[] = [];
  name: string[] = [];
  weatherIcon: string[] = [];
  desc: string[] = [];
  appId = 'fef19bc203ee937d5506cce5cf6ba656';

getWeatherForecastData(cityId){
  this.url = `http://api.openweathermap.org/data/2.5/forecast?id=${
    cityId
    
  }&appid=${this.appId}`
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

ngOnInit() {
    this.cityIdentifier = this.route.snapshot.paramMap.get('id')
    this.getWeatherForecastData(this.cityIdentifier)
  }
}
