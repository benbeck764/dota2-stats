import { Component, Input } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ChartsComponent } from './charts/charts.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS],
  styleUrls: ['app/app.css']
})
@RouteConfig([
  { path: '/heroes', as: 'Heroes', component: HeroesComponent, useAsDefault: true },
  { path: '/charts', as: 'Charts', component: ChartsComponent}
])
export class AppComponent { }
