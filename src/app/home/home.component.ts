import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../quote-class/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stall!: Api
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    
    interface ApiResponse {
      housename: string;
      description: string;
      location: string;
    }
    
    this.http.get<ApiResponse>("http://127.0.0.1:8000/articles").subscribe(data => {
      // Succesful API request
      this.stall = new Api(data.housename, data.description,data.location)
    })
  }

}
