import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../heroes.service';
import { MatchDetails, StatsService } from '../statistics/statistics.service';


@Component({
  selector: 'matchdetails',
  templateUrl: 'app/heroes/hero/matches/matches.component.html',
  providers: [StatsService],
  styleUrls: ['app/heroes/hero/matches/matches.css']
})

export class MatchesComponent {
  @Input() currentHero:Hero;
  details: MatchDetails;
  
  constructor(private _statsService: StatsService) { }
  
  ngOnInit() {
      this.details = this.getMatchDetails(this.currentHero.id);
  }
  
  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    this.currentHero = changes['currentHero'].currentValue;
    this.details = this.getMatchDetails(this.currentHero.id);
  }
  
  getMatchDetails(id:number) {
     this._statsService.getMatchDetails(id)
        .subscribe(details => this.details = details);
        
     return this.details;
  }
}
