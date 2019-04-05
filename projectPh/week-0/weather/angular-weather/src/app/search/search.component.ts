import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { ApiFetcherService } from 'src/api-fetcher.service';
import { weatherIcon } from '../weatherIconChooser';
let apiKey = '67b670f50bba99d9bf79e08cf5962c18';

@Component({
  selector: 'app-search',
  template: `<input type="text" #box (keyup.enter)="onEnter(box.value)" placeholder="Search">
  <button (click) ="onEnter(box.value)">Search</button>
  <h1 style="color:red" *ngIf='resp.length > 1'>{{resp}}</h1>
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
      <img  style="width:90px; height: 90px;" src={{weather}} alt="">
    </div>
  </div>
</div>
  `,
})


export class SearchComponent {
  value = '';
  resp:string = '';
  weather: string;
  temp: string;
  city: string;
  country: string;
  constructor(private http: HttpClient) {
  }

  onEnter(value: string) {
    let search = new ApiFetcherService(this.http)
    this.value = value;
    let myData = search.toFetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.value}&appid=${apiKey}`)
    myData.subscribe((data: any) => {
      console.log(data)
      this.resp = ''
      this.city = data.body.name,
      this.country =  data.body.sys.country,
      this.weather =  weatherIcon(data.body.weather[0]),
      this.temp = `${Math.round(data.body.main.temp - 273)}℃`  
      return 'Succesful'
      
    }, (error: HttpErrorResponse)=>{
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
}