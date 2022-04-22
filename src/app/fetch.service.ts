import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stall } from './quote-class/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  apiURL = 'https://houseyourbiz.herokuapp.com/stalls/';
  constructor(public http: HttpClient) { }
  Fetch(): Observable<any> {
    return this.http.get(this.apiURL);
  }
}
