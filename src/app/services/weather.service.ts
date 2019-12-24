import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Weather } from '../models/Weateher';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  searchUrl:string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) { }

  fetchWeather():Observable<Weather> {
    return this.http.get<Weather>(`${this.searchUrl}?q=kigali&appid=f40c14d68e58241f362e7579852ed201`);
  }

  searchWeather(city:Weather): Observable<Weather> {
    return this.http.get<Weather>(`${this.searchUrl}?q=${city}&appid=f40c14d68e58241f362e7579852ed201`);
  }

}
