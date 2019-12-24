import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherPageComponent } from './components/weather-page/weather-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent} from './components/about-page/about-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomePageComponent }, 
  { path: 'weather', component: WeatherPageComponent },
  {path: 'about', component: AboutPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
