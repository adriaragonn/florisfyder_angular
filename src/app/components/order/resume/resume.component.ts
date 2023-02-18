import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  order: any;
  order_resume: any;
  work_resume: any;

  constructor(
    private _orderService: OrderService,
    private _workService: WorksService
  ) { }

  ngOnInit(): void {
    //this._orderService.getOrder()

    
    console.log(this.order)

    this._workService.getWorks().subscribe(
      (res: any) => {
        this.work_resume = res.data.filter((el:any) => el.id == this.order.work.id)[0].work
        this._workService.getOptions(this.order.work.id).subscribe(
          (res: any) => {
            console.log(res.data)
          }
        )
      }
    )

  }

}
