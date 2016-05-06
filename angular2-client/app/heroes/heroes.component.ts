import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero, HeroesService } from './heroes.service';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'heroes',
  templateUrl: 'app/heroes/heroes.component.html',
  providers: [HeroesService],
  styleUrls: ['app/heroes/heroes.css'],
  directives: [HeroComponent]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  currentHero: Hero;

  constructor(private _heroesService: HeroesService, public router:Router) { }

  ngOnInit() {
    this.heroes = this.getHeroes();
    this.selectHero(1);
  }
 
  getHeroes() {
    this.heroes = [];

    this._heroesService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);

    return this.heroes;
  }
  
  selectHero(id:number) {
      var i = 0;
      for(i; i < this.heroes.length; i++) {
          if(this.heroes[i].id == id) {
              this.currentHero = this.heroes[i];
          }
      }
  }
}
