import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent implements OnChanges {

  @Input() allOrders: [] = [];
  orders: any[] = [];

  constructor() { }

  ngOnChanges(): void {
    if(this.allOrders != undefined){
      for(var i = this.allOrders.length -8; this.allOrders.length > i; i++){
        this.orders.push(this.allOrders[i])
      }
    }
  }

}
