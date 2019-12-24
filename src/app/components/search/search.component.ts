import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchCity: EventEmitter<any> = new EventEmitter();

  query: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const city = this.query;
    this.searchCity.emit(city);
  }

}
