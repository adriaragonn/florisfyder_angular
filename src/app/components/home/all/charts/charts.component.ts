import { Component, OnInit, Input, OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts'

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, OnChanges {

  @Input() pendingOrders: any;
  @Input() quantityOfOrders: any;

  constructor() { }

  ngOnChanges(){
    
    let quantity: any[] = []
    let pendingOrders: any[] = []
    quantity.push(Number(this.quantityOfOrders))
    pendingOrders.push(Number(this.pendingOrders))
    console.log(quantity)
    
         // @ts-ignore
          const chart = Highcharts.chart('container', {
            chart: {
                type: 'bar'
            },
            title: {
              text: ''
            },
            xAxis: {
                categories: ['Pedidos']
            },
            yAxis : {
              title: ['Nº']
            },
            series: [{
                name: 'Pedidos totales',
                data: quantity
            }, {
                name: 'Pedidos pendientes',
                data: pendingOrders
            }]
          })
          let credits = document.getElementsByClassName('highcharts-credits')[0]
          credits.remove()
    
    


  }

  ngOnInit(): void {


    console.log(this.quantityOfOrders)
      
    
  }
}
