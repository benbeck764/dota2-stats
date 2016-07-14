import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Hero, HeroesService } from '../../heroes/heroes.service';

@Component({
  selector: 'heroesSideBar',
  templateUrl: 'app/charts/heroesSideBar/heroesSideBar.component.html',
  providers: [HeroesService],
  styleUrls: ['app/charts/heroesSideBar/heroesSideBar.css']
})
export class HeroesSideBarComponent implements OnInit {
  heroes: Hero[];
  @Output() currentHero: EventEmitter<any> = new EventEmitter();

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
              this.currentHero.emit(this.heroes[i]);
          }
      }
  }
}
