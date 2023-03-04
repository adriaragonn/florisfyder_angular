import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-quantities',
  templateUrl: './quantities.component.html',
  styleUrls: ['./quantities.component.scss']
})
export class QuantitiesComponent implements OnInit {

  quantities: any;
  notQuantities: boolean = false;
  order_quantity: any = 0;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _workService: WorksService,
    private _orderService: OrderService
  ) { }

  ngOnInit(): void {
    this._orderService.work_id_emit.subscribe(
      hasId => {
        this._workService.getQuantities(hasId).subscribe(
          (res: any) => {
            this.quantities = []
            if(res.data.length == 0){
              this._orderService.quantities.emit(false);
              this.notQuantities = true
            }else{
              this._orderService.quantities.emit(true);
              this.quantities = res.data
            }
          }
        )
      }
    )
  }

  addQuantity(quantity: number, id: any){
    this.quantities.forEach((el: any) => {
      if(el.id == id) {
        document.getElementsByClassName(`qy${id}`)[0].classList.remove('btn-info', 'transparency')
        document.getElementsByClassName(`qy${id}`)[0].classList.add('btn-success')
      }else {
        document.getElementsByClassName(`qy${el.id}`)[0].classList.add('btn-info', 'transparency')
        document.getElementsByClassName(`qy${el.id}`)[0].classList.remove('btn-success')
      }
    })
    this.order_quantity = quantity;

    this._orderService.addQuantity(quantity)
  }

  quantity(){
    this._orderService.addQuantity(this.order_quantity)
  }

}
