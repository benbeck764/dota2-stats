import { Component, Input, OnInit, OnChanges, SimpleChange } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from '../../heroes.service';
import { KDA, StatsService } from '../statistics/statistics.service';


@Component({
  selector: 'kda',
  templateUrl: 'app/heroes/hero/kda/kda.component.html',
  providers: [StatsService],
  styleUrls: ['app/heroes/hero/kda/kda.css']
})

export class KdaComponent {
  @Input() currentHero:Hero;
  kda: KDA;
  
  constructor(private _statsService: StatsService) { }
  
  ngOnInit() {
      this.kda = this.getKDA(this.currentHero.id);
  }
  
  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    this.currentHero = changes['currentHero'].currentValue;
    this.kda = this.getKDA(this.currentHero.id);
  }
  
  getKDA(id:number) {
     this._statsService.getKDA(id)
        .subscribe(kda => this.kda = kda);
        
     return this.kda;
  }
}
