import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Weather } from '../models/CurrentWeather';
import { ApiFetcherService } from 'src/api-fetcher.service';
import { TilesComponent } from '../tiles/tiles.component';
import { AppComponent } from '../app.component';
let apiKey = '67b670f50bba99d9bf79e08cf5962c18';

@Component({
  selector: 'app-search',
  template: `<input type="text" #box (keyup.enter)="onEnter(box.value); hide('show1')" placeholder="Search">
  <div class="tile">
  <div class="cc">
    <h3>{{city}}</h3> 
    <p>{{country}}</p>
  </div>
  <div class="noname">
    <div class="temp">
      <h1>{{temp}}</h1> 
    </div>
    <div class="icon">
        <h1>
            {{storm}}
            {{mist}}
          </h1>
      <img  style="width:90px; height: 90px;" src={{weather}} alt="">
    </div>
  </div>
</div>
  `,
})


export class SearchComponent{
  value = '';
  weather = '';
  temp = '';
  city = ''
  country = ''
  constructor(private http:HttpClient){
  }

  onEnter(value: string) { 
    let search = new  ApiFetcherService(this.http)
    this.value = value; 
    let myData = search.toFetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.value}&appid=${apiKey}`)
    myData.subscribe((data:Weather) => {
      this.city = data.name
      this.country = data.sys.country
      if(data.weather[0].icon === '04d' || data.weather[0].icon === '04n'){
      this.weather = '../../../assets/ions/cloudy.png'
    }else if((data.weather[0].icon === '09d' || data.weather[0].icon === '09n') || (data.weather[0].icon === '10d' || data.weather[0].icon === '10n')){
      this.weather = '../../../assets/ions/rainy.png'
    }else if(data.weather[0].icon === '01d' || data.weather[0].icon === '01n' ){
      this.weather = '../../../assets/ions/sunny.png'
    }else if(data.weather[0].icon === '11d' || data.weather[0].icon === '11n' ){
      this.weather = '../../../assets/ions/storm.png';
    }else if(data.weather[0].icon === '02d' || data.weather[0].icon === '02n'){
      this.weather = '../../../assets/ions/partly_cloudy.png'
    }else if(data.weather[0].icon === '03d' || data.weather[0].icon === '03n'){
      this.weather = '../../../assets/ions/partly_cloudy.png'
    }else if(data.weather[0].icon === '13d' || data.weather[0].icon === '13n'){
      this.weather = '../../../assets/ions/snowy.png'
    }else if(data.weather[0].icon === '50d' || data.weather[0].icon === '50n'){
      this.weather = '../../../assets/ions/fog.png'
    }else{
     this.weather = '../../../assets/ions/sunny.png'
    }
    this.temp = `${Math.round(data.main.temp - 273)}℃`
   })
    }
}