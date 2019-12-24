import { Component, OnInit } from '@angular/core';
import { Weather } from '../../models/Weateher';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css']
})
export class WeatherPageComponent implements OnInit {
  weathers: Weather;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.fetchWeather().subscribe((data:any) => {
      this.weathers = data.main;
    });
  }

  searchCity(weather: Weather) {
    this.weatherService.searchWeather(weather).subscribe((data: any) => {
      this.weathers = data.main;
    });
  }
  
}
