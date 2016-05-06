import { Component, OnInit, Input } from 'angular2/core';
import { Router } from 'angular2/router';

import { HeroesSideBarComponent } from './heroesSideBar/heroesSideBar.component';
import { ChartsGPMComponent } from './gpm/gpm.component';
import { Hero } from '../heroes/heroes.service';

@Component({
  selector: 'charts',
  templateUrl: 'app/charts/charts.component.html',
  providers: [],
  styleUrls: ['app/charts/charts.css'],
  directives: [HeroesSideBarComponent, ChartsGPMComponent]
})
export class ChartsComponent implements OnInit {

  constructor(public router:Router) { }
  
  @Input() currentHero:Hero;

  ngOnInit() {
      
  }
 
}
