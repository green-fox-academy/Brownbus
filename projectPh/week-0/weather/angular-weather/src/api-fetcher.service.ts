import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiFetcherService {
  url: string
  constructor(private http: HttpClient) {

  };
  toFetch(url: string) {
    this.url = url;
    let result = this.http.get(url);
    return result;
  };
;}
