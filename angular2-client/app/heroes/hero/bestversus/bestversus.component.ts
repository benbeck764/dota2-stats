import { Component, Input, OnInit, OnChanges, SimpleChange } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from '../../heroes.service';
import { BestVersus, StatsService } from '../statistics/statistics.service';


@Component({
  selector: 'bestversus',
  templateUrl: 'app/heroes/hero/bestversus/bestversus.component.html',
  providers: [StatsService],
  styleUrls: ['app/heroes/hero/bestversus/bestversus.css']
})

export class BestVersusComponent {
  @Input() currentHero:Hero;
  bestversus: BestVersus;
  
  constructor(private _statsService: StatsService) { }
  
  ngOnInit() {
      this.bestversus = this.getBestVersus(this.currentHero.id);
  }
  
  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    this.currentHero = changes['currentHero'].currentValue;
    this.bestversus = this.getBestVersus(this.currentHero.id);
  }
  
  getBestVersus(id:number) {
     this._statsService.getBestVersus(id)
        .subscribe(lhdeny => this.bestversus = lhdeny);
        
     return this.bestversus;
  }
}
