import { Injectable, OnInit } from 'angular2/core';
import { Http } from 'angular2/http';
import 'rxjs/add/operator/map';


export interface GPMChartData {
	time: number;
    gpm: number;
}

@Injectable()
export class ChartsService{
  constructor(private _http: Http) { }

  getGPMChartData(id: number) {
   return this._http.get('http://localhost:45101/api/charts/gpm/' + id)
      .map((response) => response.json());
  }
  

}