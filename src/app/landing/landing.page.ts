import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Component, OnInit } from '@angular/core';
const API_ULR = environment.API_URL;
const API_KEY = environment.API_KEY;


@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  todayDay = new Date()
  weatherTemp : any
  cityName : ""
  name=""
  loading = true
  weatherDetails : any
  icon :any
  constructor(public  httpClient : HttpClient) {
   // this.loadData()
  }

  ngOnInit() {
  }

  loadData(){
    this.httpClient.get(`${API_ULR}/weather?q=${this.cityName}&appid=${API_KEY}`).subscribe( results => {
      console.log(results);
      this.weatherTemp = results['main']
      this.cityName = results['name']
      console.log(this.weatherTemp);
      this.weatherDetails = results['weather'][0]
      console.log(this.weatherDetails);
      this.icon = "https://openweathermap.org/img/wn/" + this.weatherDetails.icon + "@4x.png"
      this.loading =false
    }

    )
  }


}
