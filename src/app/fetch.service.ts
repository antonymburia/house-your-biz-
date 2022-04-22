import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stall } from './quote-class/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  apiURL = 'http://127.0.0.1:8000/stalls';
  constructor(public http: HttpClient) { }
  Fetch(): Observable<any> {
    return this.http.get(this.apiURL);
  }
}
