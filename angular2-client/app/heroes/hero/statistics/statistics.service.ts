import { Injectable, OnInit } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';

export interface WorstVersus {
    id: number;
    formatted_name: string;
    image_name: string;
    count: number;
}

export interface BestVersus {
    id: number;
    formatted_name: string;
    image_name: string;
    count: number;
}

export interface LastHitsDenies {
    lh: number;
    deny: number;
}

export interface PerMin {
    gpm: number;
    xpm: number;
}

export interface MatchDetails {
    results: string;
    mode: string;
    kda: string;
    duration: string;
    items: any[],
    abilities: any[]
}

export interface MostUsedItems {
    id: number;
    formatted_name: string;
    image_name: string;
    count: number;
}

export interface KDA {
	kills: number;
	deaths: number;
    assists: number;
}

export interface WinRate {
    wins: number;
    losses: number;
    winRate: number;
}

@Injectable()
export class StatsService {
  constructor(private _http: Http) { }
  
  getWorstVersus(id: number) {
      return this._http.get('http://localhost:45101/api/statistics/worstversus/' + id)
        .map((response) => response.json());
  }
  
  getBestVersus(id: number) {
      return this._http.get('http://localhost:45101/api/statistics/bestversus/' + id)
        .map((response) => response.json());
  }
  
  getLastHitsAndDenies(id: number) {
      return this._http.get('http://localhost:45101/api/statistics/lhdeny/' + id)
        .map((response) => response.json());
  }
  
  getPerMin(id: number) {
      return this._http.get('http://localhost:45101/api/statistics/permin/' + id)
        .map((response) => response.json());
  }
  
  getMatchDetails(id: number) {
      return this._http.get('http://localhost:45101/api/matches/' + id)
        .map((response) => response.json());
  }
  
  getMostUsedItems(id: number) {
      return this._http.get('http://localhost:45101/api/items/mostused/' + id)
        .map((response) => response.json());
  }

  getKDA(id: number) {
   return this._http.get('http://localhost:45101/api/statistics/kda/' + id)
      .map((response) => response.json());
  }
  
  getWinRate(id: number) {
      return this._http.get('http://localhost:45101/api/statistics/winrate/' + id)
      .map((response) => response.json());
  }
}