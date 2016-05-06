import { Component, Input, OnInit, OnChanges, SimpleChange } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from '../../heroes.service';
import { WorstVersus, StatsService } from '../statistics/statistics.service';


@Component({
  selector: 'worstversus',
  templateUrl: 'app/heroes/hero/worstversus/worstversus.component.html',
  providers: [StatsService],
  styleUrls: ['app/heroes/hero/worstversus/worstversus.css']
})

export class WorstVersusComponent {
  @Input() currentHero:Hero;
  worstversus: WorstVersus;
  
  constructor(private _statsService: StatsService) { }
  
  ngOnInit() {
      this.worstversus = this.getWorstVersus(this.currentHero.id);
  }
  
  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    this.currentHero = changes['currentHero'].currentValue;
    this.worstversus = this.getWorstVersus(this.currentHero.id);
  }
  
  getWorstVersus(id:number) {
     this._statsService.getWorstVersus(id)
        .subscribe(worstversus => this.worstversus = worstversus);
        
     return this.worstversus;
  }
}
