import { Component, OnInit, Input } from 'angular2/core';

import { nvD3 } from 'ng2-nvd3/lib/ng2-nvd3';

import { GPMChartData, ChartsService } from '../charts.service';
import { Hero } from '../../heroes/heroes.service';
declare let d3: any;

@Component({
  selector: 'gpm-chart',
  templateUrl: 'app/charts/gpm/gpm.component.html',
  providers: [ChartsService],
  styleUrls: ['app/charts/gpm/gpm.css'],
  directives: []
})
export class ChartsGPMComponent implements OnInit {
  
  constructor(private _chartsService: ChartsService) { }
  
  @Input() currentHero:Hero;
  gpmData: GPMChartData;
  options: any;
  chartData: any;

  ngOnInit() {
     
    this.gpmData = this.getGPMChartData(this.currentHero.id);
    
    this.chartData = [
        {
            key: "Gold Per Minute",
            values: this.gpmData
        }
    ]
    
    this.options = {
      chart: {
        type: 'cumulativeLineChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d:GPMChartData){return d.time;},
        y: function(d:GPMChartData){return d.gpm;},
        showValues: true,
        duration: 500,
        xAxis: {
          axisLabel: 'Date'
        },
        yAxis: {
          axisLabel: 'GPM',
          axisLabelDistance: -10
        }
      }
    }
  }
 
  getGPMChartData(id:number) {
    this._chartsService.getGPMChartData(id)
        .subscribe(gpmData => this.gpmData = gpmData);
        
    return this.gpmData;
  }
  
  
}

