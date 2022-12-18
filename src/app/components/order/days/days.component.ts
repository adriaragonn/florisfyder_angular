import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent implements OnInit {

  days: any;

  constructor(
    private _genericService: GenericService,
    private _orderService: OrderService
  ) {}

  ngOnInit(): void {
    this._genericService.getDays().subscribe(
      (res: any) => {
        this.days = res.data
      }
    )
  }

  selectDay(id:any, option:any){
    let btn = document.querySelector(`.btn${id}`)

    for(var i = 0; this.days.length > i; i++){
      if(this.days[i].id != id){
        let btn_success = document.querySelector(`.btn${this.days[i].id}`)
        btn_success?.classList.remove('btn-success')
        btn_success?.classList.add('btn-info', 'transparency')
      }else{
        btn?.classList.remove('btn-info', 'transparency')
        btn?.classList.add('btn-success')
      }
    }

    this._orderService.addDay(id)
  }
}
