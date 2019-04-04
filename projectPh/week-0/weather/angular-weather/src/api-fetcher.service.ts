import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Weather } from './app/models/CurrentWeather';
import {catchError} from 'rxjs/operators'
@Injectable({
providedIn: 'root'
})
export class ApiFetcherService {
  url: string
  constructor(private http: HttpClient) {

  };
  toFetch(url: string): any  {
    this.url = url;
    let result = this.http.get(url,{observe : 'response'})
    return result
  }
}
