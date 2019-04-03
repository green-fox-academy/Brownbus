import { Component, OnInit } from '@angular/core';
import { ApiFetcherService } from 'src/api-fetcher.service';
import { Weather } from '../models/CurrentWeather';
import { City } from '../models/City';
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
    myData.subscribe((data: Weather) => {
      let myWeather: string = ''
      console.log(data)
      if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n') {
        myWeather = '../../../assets/ions/cloudy.png   '
      } else if ((data.weather[0].icon === '09d' || data.weather[0].icon === '09n') || (data.weather[0].icon === '10d' || data.weather[0].icon === '10n')) {
        myWeather = '../../../assets/ions/rainy.png'
      } else if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
        myWeather = '../../../assets/ions/sunny.png'
      } else if (data.weather[0].icon === '11d' || data.weather[0].icon === '11n') {
        myWeather = '../../../assets/ions/storm.png';
      } else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
        myWeather = '../../../assets/ions/partly_cloudy.png'
      } else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
        myWeather = '../../../assets/ions/partly_cloudy.png'
      } else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n') {
        myWeather = '../../../assets/ions/snowy.png'
      } else if (data.weather[0].icon === '50d' || data.weather[0].icon === '50n') {
        myWeather = '../../../assets/ions/fog.png'
      } else {
        myWeather = '../../../assets/ions/sunny.png'
      }

      this.cities.push({
        name: data.name,
        country: data.sys.country,
        weather: myWeather,
        temp: `${Math.round(data.main.temp - 273)}℃`
      })

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


