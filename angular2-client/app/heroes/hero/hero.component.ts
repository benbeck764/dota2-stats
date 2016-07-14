import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Hero, HeroesService } from '../heroes.service';
import { KdaComponent } from './kda/kda.component';
import { WinRateComponent } from './winrate/winrate.component';
import { MostUsedItemsComponent } from './items/items.component';
import { MatchesComponent } from './matches/matches.component';
import { PerMinComponent } from './permin/permin.component';
import { LastHitsDeniesComponent} from './lhdeny/lhdeny.component';
import { BestVersusComponent } from './bestversus/bestversus.component';
import { WorstVersusComponent } from './worstversus/worstversus.component';


@Component({
  selector: 'hero',
  templateUrl: 'app/heroes/hero/hero.component.html',
  providers: [HeroesService],
  styleUrls: ['app/heroes/hero/hero.css'],
  directives: [KdaComponent, WinRateComponent, MostUsedItemsComponent, MatchesComponent, PerMinComponent, LastHitsDeniesComponent, BestVersusComponent, WorstVersusComponent]
})

export class HeroComponent {
  @Input() currentHero:Hero;
  
  constructor(private _heroesService: HeroesService) { }

}
