import { Component, OnInit } from '@angular/core';
import { ApiFetcherService } from 'src/api-fetcher.service';
import { Weather } from '../models/CurrentWeather';
import { City } from '../models/City';
import { weatherIcon } from '../weatherIconChooser';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
let apiKey = '67b670f50bba99d9bf79e08cf5962c18';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  cities: City[] = [];
  weather: string;
  temp: string;
  name: string;
  country: string;
  constructor(private svc: ApiFetcherService) {
  }

  getData(city: string) {
    let myData = this.svc.toFetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    myData.subscribe((data:any) => {
      this.cities.push({
        resp: data.status,
        name: data.body.name,
        country: data.body.sys.country,
        weather: weatherIcon(data),
        temp: `${Math.round(data.body.main.temp - 273)}℃`  
      })

    },(error: HttpErrorResponse) => {
      console.log(error.status)
      console.log(error.message)
      return error
    })

  }


  ngOnInit() {
    this.getData('Seattle')
    this.getData('Miami')
    this.getData('London')
    this.getData('Barcelona')
    this.getData('Budapest')
  }
}


