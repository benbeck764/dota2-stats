import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../heroes.service';
import { PerMin, StatsService } from '../statistics/statistics.service';


@Component({
  selector: 'permin',
  templateUrl: 'app/heroes/hero/permin/permin.component.html',
  providers: [StatsService],
  styleUrls: ['app/heroes/hero/permin/permin.css']
})

export class PerMinComponent {
  @Input() currentHero:Hero;
  permin: PerMin;
  
  constructor(private _statsService: StatsService) { }
  
  ngOnInit() {
      this.permin = this.getPerMin(this.currentHero.id);
  }
  
  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    this.currentHero = changes['currentHero'].currentValue;
    this.permin = this.getPerMin(this.currentHero.id);
  }
  
  getPerMin(id:number) {
     this._statsService.getPerMin(id)
        .subscribe(permin => this.permin = permin);
        
     return this.permin;
  }
}
