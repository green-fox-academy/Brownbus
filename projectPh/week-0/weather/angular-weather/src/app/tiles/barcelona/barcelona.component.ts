import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Weather } from 'src/app/models/CurrentWeather';
import { ApiFetcherService } from 'src/api-fetcher.service';
let apiKey = '67b670f50bba99d9bf79e08cf5962c18';
let city = 'Barcelona'

@Component({
  selector: 'app-barcelona',
  templateUrl: './barcelona.component.html',
  styleUrls: ['./barcelona.component.css']
})
export class BarcelonaComponent implements OnInit {
  temp = ''
  weather = ''
constructor(private http:HttpClient){
}
getData(){
let wait  =  new ApiFetcherService(this.http)
let myData = wait.toFetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
myData.subscribe( (data:Weather) => {
  console.log(data)
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


ngOnInit() {
this.getData()
  }
}
