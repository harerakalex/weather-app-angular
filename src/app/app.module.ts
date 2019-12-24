import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherPageComponent } from './components/weather-page/weather-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { SearchComponent } from './components/search/search.component';
import { WeatherItemComponent } from './components/weather-item/weather-item.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherPageComponent,
    PageNotFoundComponent,
    HomePageComponent,
    AboutPageComponent,
    SearchComponent,
    WeatherItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
