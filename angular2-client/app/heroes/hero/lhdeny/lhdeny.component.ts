import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../heroes.service';
import { LastHitsDenies, StatsService } from '../statistics/statistics.service';


@Component({
  selector: 'lhdeny',
  templateUrl: 'app/heroes/hero/lhdeny/lhdeny.component.html',
  providers: [StatsService],
  styleUrls: ['app/heroes/hero/lhdeny/lhdeny.css']
})

export class LastHitsDeniesComponent {
  @Input() currentHero:Hero;
  lhdeny: LastHitsDenies;
  
  constructor(private _statsService: StatsService) { }
  
  ngOnInit() {
      this.lhdeny = this.getLastHitsAndDenies(this.currentHero.id);
  }
  
  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    this.currentHero = changes['currentHero'].currentValue;
    this.lhdeny = this.getLastHitsAndDenies(this.currentHero.id);
  }
  
  getLastHitsAndDenies(id:number) {
     this._statsService.getLastHitsAndDenies(id)
        .subscribe(lhdeny => this.lhdeny = lhdeny);
        
     return this.lhdeny;
  }
}
