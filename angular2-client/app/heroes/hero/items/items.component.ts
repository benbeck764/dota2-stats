import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../heroes.service';
import { MostUsedItems, StatsService } from '../statistics/statistics.service';


@Component({
  selector: 'mostuseditems',
  templateUrl: 'app/heroes/hero/items/items.component.html',
  providers: [StatsService],
  styleUrls: ['app/heroes/hero/items/items.css']
})

export class MostUsedItemsComponent {
  @Input() currentHero:Hero;
  mostUsed: MostUsedItems;
  
  constructor(private _statsService: StatsService) { }
  
  ngOnInit() {
      this.mostUsed = this.getMostUsedItems(this.currentHero.id);
  }
  
  ngOnChanges(changes: {[propName: string]: SimpleChange}) {
    this.currentHero = changes['currentHero'].currentValue;
    this.mostUsed = this.getMostUsedItems(this.currentHero.id);
  }
  
  getMostUsedItems(id:number) {
     this._statsService.getMostUsedItems(id)
        .subscribe(mostUsed => this.mostUsed = mostUsed);
        
     return this.mostUsed;
  }
}
