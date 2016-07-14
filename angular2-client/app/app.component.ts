import { Component, Input } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { ChartsComponent } from './charts/charts.component';
import { OverviewComponent } from './overview/overview.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ['app/app.css']
})

export class AppComponent { }
