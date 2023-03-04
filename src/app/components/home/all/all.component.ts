import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  quantityOfOrders?: any = 0;
  today?: any;
  pendingOrders?: any = 0;
  totalAmount?: any = 0;

  constructor(
    private _orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.today = new Date('2023/10/29').getTime()
    //this.today = Date.now()

    this._orderService.getAllOrders().subscribe(
      (res: any) => {
        this.quantityOfOrders = res.data.length
        res.data.forEach((el:any) => {
          this.totalAmount = + el.amount
          let element
          element = el.date.split('/')
          element = new Date(`${element[2]}/${element[1]}/${element[0]}`).getTime()
          if(this.today < element){
            this.pendingOrders++;
          }else{
            console.log(false)
          }
        });
      }
    )
  }

}
