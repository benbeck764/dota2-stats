import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Hero } from './heroes.service';

export interface Hero {
	id: number;
	formatted_name: string;
    image_name: string;
}

@Injectable()
export class HeroesService{
  constructor(private _http: Http) { }

  getHeroes() {
   return this._http.get('http://localhost:45101/api/heroes/information')
      .map((response) => response.json());
  }

  /*getHero(id: number) {
    return this._http.get('http://localhost:45101/api/HeroInformation')
      .map((response) => response.json().filter((h: Hero) => h.HeroId === id)[0]);
  }*/
}