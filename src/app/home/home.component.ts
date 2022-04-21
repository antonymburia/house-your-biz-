import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from '../quote-class/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

}
