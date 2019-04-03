import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Weather } from './app/models/CurrentWeather';

@Injectable({
providedIn: 'root'
})
export class ApiFetcherService {
  url: string
  constructor(private http: HttpClient) {

  };
  toFetch(url: string): Observable<Weather> {
    this.url = url;
    let result = this.http.get<Weather>(url);
    return result;
  };
;}
