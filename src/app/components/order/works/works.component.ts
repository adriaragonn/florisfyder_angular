import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  @Output() id = new EventEmitter
  works: any;

  constructor(
    private _worksService: WorksService,
    private _orderService: OrderService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._worksService.getWorks().subscribe(
      (res: any) => {
        this.works = res.data
      }
    )
  }

  selectWork(id:any, name:string){
    console.log(name, id)
    let btn = document.querySelector(`.btn${id}work`)

    for(var i = 0; this.works.length > i; i++){
      if(this.works[i].id != id){
        let btn_success = document.querySelector(`.btn${this.works[i].id}work`)
        btn_success?.classList.remove('btn-success')
        btn_success?.classList.add('btn-info', 'transparency')
      }else{
        btn?.classList.remove('btn-info', 'transparency')
        btn?.classList.add('btn-success')
      }
    }
    this.id.emit(id)
    this._orderService.addWork(id, name)
  }

}
