import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../heroes.service';
import { WinRate, StatsService } from '../statistics/statistics.service';


@Component({
  selector: 'winrate',
  templateUrl: 'app/heroes/hero/winrate/winrate.component.html',
  providers: [StatsService],
  styleUrls: ['app/heroes/hero/winrate/winrate.css']
})

export class WinRateComponent {
  @Input() currentHero:Hero;
  winRate: WinRate;
  
  constructor(private _statsService: StatsService) { }
  
  ngOnInit() {
      this.winRate = this.getWinRate(this.currentHero.id);
  }
  
  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    this.currentHero = changes['currentHero'].currentValue;
    this.winRate = this.getWinRate(this.currentHero.id);
  }
  
  getWinRate(id:number) {
     this._statsService.getWinRate(id)
        .subscribe(winRate => this.winRate = winRate);
        
     return this.winRate;
  }
}
