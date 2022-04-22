// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Stall } from '../quote-class/api';


// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {

//   stalls!: Api
//   constructor(public http: HttpClient) { }

//   ngOnInit(){

//     interface ApiResponse {
//       housename: string;
//       description: string;
//       location: string;
//       price: string;
//     }

//     this.http.get<ApiResponse>("http://127.0.0.1:8000/stalls/").subscribe(data => {
//       // Succesful API request
//       this.stalls = new Api(data.housename, data.description,data.location,data.price)


//     })

//   }


// }


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchService } from '../fetch.service';
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   stalls!: Api
//   // Inject HttpClient into your component or service.
//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     interface ApiResponse {
//             housename: string;
//             description: string;
//             location: string;
//             price: string;
//           }
//     this.http.get<ApiResponse>('http://127.0.0.1:8000/stalls/')
//       .subscribe(data => {
//         // data is now an instance of type ItemsResponse, so you can do this:
//         this.stalls = new Api(data.housename, data.description,data.location,data.price)
//         console.log(this.stalls)
//       });
//   }
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stalls!: Stall[];

  constructor(public fetchy: FetchService) { }
  getdata() {
    this.fetchy.Fetch().subscribe(data => {
      this.stalls = data.stalls;
      console.log(this.stalls)
      return (this.stalls);
    })
  }

  ngOnInit(): void {
    this.getdata()
  }

}