import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericService } from 'src/app/services/generic.service';
import { OrderService } from 'src/app/services/order.service';

interface order_card {

}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  today: Date = new Date()
  work_id: any;
  products: boolean = true;
  options: boolean = true;
  day_selected: any;
  client_selected: any;
  allOrders = []
  numPedidosDay28: any;
  numPedidosDay29: any;
  numPedidosDay30: any;
  numPedidosDay31: any;
  numPedidosDay1: any;
  url?:string;

  constructor(
    private _orderService: OrderService,
    private _genericService: GenericService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._orderService.client_selected.subscribe(
      hasClient => {
        this.client_selected = hasClient
      }
    )

    this._orderService.day_selected.subscribe(
      hasDay => {
        this.day_selected = hasDay
      }
    )
    this._orderService.work_id_emit.subscribe(
      hasId => {
        this.work_id = hasId
        this._orderService.options.subscribe(
          hasOptions => {
            this.options = hasOptions
          }
        )
        this._orderService.products.subscribe(
          hasProducts => {
            this.products = hasProducts
          }
        )
      }
    )

  }

  confirmOrder(){
    this._orderService.confirmOrder().subscribe(
      (res: any) => {
        console.log(res)
      }
    )
  }

  getAllOrders(){
    this._orderService.getAllOrders().subscribe(
      (res: any) => {

        let today = new Date()
        this.allOrders = res.data
        this.numPedidosDay1 = res.data.filter((el:any) => el.date == `01/11/${today.getFullYear()}`)
        this.numPedidosDay28 = res.data.filter((el:any) => el.date == `28/10/${today.getFullYear()}`)
        this.numPedidosDay29 = res.data.filter((el:any) => el.date == `29/10/${today.getFullYear()}`)
        this.numPedidosDay30 = res.data.filter((el:any) => el.date == `30/10/${today.getFullYear()}`)
        this.numPedidosDay31 = res.data.filter((el:any) => el.date == `31/10/${today.getFullYear()}`)
        console.log(this.numPedidosDay28)
      }
    )
  }

}
