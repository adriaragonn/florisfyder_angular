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
    let id = this._route.snapshot.paramMap.get('id')
    this._workService.getQuantities(id).subscribe(
      (res: any) => {
        if(res.data.length == 0){
          this.notQuantities = true;
        }else{
          this.quantities = res.data
        }
      }
    )
  }

  addQuantity(quantity: number){
    this.order_quantity = quantity;
  }

  viewOrderResume(){
    this._orderService.addQuantity(this.order_quantity)
    //this._router.navigate(['resume'])
    this._orderService.confirmOrder().subscribe(
      (res: any) => {
        console.log(res)
      }
    )
  }

}
