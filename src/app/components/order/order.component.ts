import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericService } from 'src/app/services/generic.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orders?: any;
  ordersBackup?:any;
  load:boolean = true;

  num?: string;
  name?: string;
  telephone?: string;
  date?: string;
  amount?: string;
  created?: string;

  constructor(
    private _router: Router,
    private _genericService: GenericService,
    private _orderService: OrderService
  ) { }

  ngOnInit(): void {
    let container: any = document.getElementsByClassName('container')[0]
    if(this._genericService.container){
      container.style.margin = 'auto'
    }else {
      container.style.margin = '0'
    }
    this._genericService.url_component.emit(this._router.url)

    this._orderService.getAllOrders().subscribe(
      (res: any) => {
        this.load = false;
        this.orders = res.data
        this.ordersBackup = res.data
      }
    )
  }

  filter(event:any){
    this.orders = this.ordersBackup.filter((el:any) => 
      el.num.includes(this.num) 
      || el.clientName.toLowerCase().includes(this.name?.toLowerCase()) 
      || el.clientTelephone.includes(this.telephone)
      || el.amount.includes(this.amount)
      || el.date.includes(this.date)
      || el.created.includes(this.created)
    )
  }

  reset(){
    this.orders = this.ordersBackup
    this.num = undefined
    this.name = undefined
    this.telephone = undefined
    this.amount = undefined
    this.created = undefined
    this.date = undefined
  }

}
