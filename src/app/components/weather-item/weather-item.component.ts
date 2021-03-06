import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../../models/Weateher';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  @Input() weather: Weather;

  constructor() { }

  ngOnInit() {
  }

}
