import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  options: any;
  subOptions: any = [];
  selectOptions: any = [];
  options_work: any = [];
  order_options: any = [];
  options_resume: any = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _workService: WorksService,
    private _orderService: OrderService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._orderService.work_id_emit.subscribe(
      hasId => {
        this._workService.getOptions(hasId).subscribe(
          (res:any) => {
            if(res.data[0].options.length == 0){
              this._orderService.options.emit(false)
              this.addOption([],hasId)
            }else {
              this._orderService.options.emit(true)
              this.options = res.data[0].options
            }
          }
        )
      }
    )

  }

  hasOptions(id:any, sub_work: string, work: string){
    let work_div: any = document.querySelector(`.rama-${id}`)
    let option = {
      id: id,
      work: work
    }
    this._workService.getSubOptions(id).subscribe(
      (res: any) => {
        if(res.data.length > 0){
          this.options_work = res.data
          work_div.style.display = ''
          work_div.classList = `rama-${id} rama`

        }else if(this.order_options.length > 0){
          if(!this.order_options.includes(id)){
            this.selectedOptions(option)
          }
        }else{
          this.selectedOptions(option)
        }
      }
    )
  }

  addOption(options?:any, work_id?: any){
    this._orderService.addOption(options, work_id, this.options_resume)
  }


  selectedOptions(option: any){
    let work: any = this.options.filter((el:any) => el.work == option.work)[0]
    
    for(let i = 0; work.options.length > i; i++){
      if(work.options[i].length > 0){
        this.addOrderOption(option)
        if(work.options[i].id == option.id){
          document.querySelector(`.btn-rama-${work.options[i].id}`)?.classList.remove('btn-info', 'transparency')
          document.querySelector(`.btn-rama-${work.options[i].id}`)?.classList.add('btn-success')
        }
      }else if(work.options[i].id == option.id){
        document.querySelector(`.sub-option-${work.options[i].id}`)?.classList.remove('btn-info', 'transparency')
        document.querySelector(`.sub-option-${work.options[i].id}`)?.classList.add('btn-success')
      }else {
        document.querySelector(`.sub-option-${work.options[i].id}`)?.classList.add('transparency')
      }
    }
  }

  addOrderOption(option:any ){
    let work = this.options.filter((el: any) => el.work == option.work)[0].options
    if(this.order_options.length == 0){
      this.order_options.push(option.id)
    }else if(this.order_options.length > 0 ){

      for(let i = 0; work.length > 0; i++){
        if(this.order_options.includes(work[i].id)){
          this.order_options = this.order_options.filter((elem: any) => elem != work[i].id)
        }else if(work[i].options.length > 0){
          for(let j = 0; work[i].options.length > 0; j++){
            if(this.order_options.includes(work[i].options[j].id)){
              this.order_options = this.order_options.filter((id: any) => id != work[i].options[j].id)
            }
          }
        }
      }
      this.order_options.push(option.id)
      if(this.order_options.length == this.options.length){
        this.addOption(this.order_options)
      }
    }
/*
      work.forEach((el: any) => {
        if(this.order_options.includes(el.id)){
          this.order_options = this.order_options.filter((elem:any) => elem != el.id)
        }else if(el.options.length > 0){
          el.options.forEach((suboption:any) => {
            if(this.order_options.includes(suboption.id)){
              this.order_options = this.order_options.filter((id: any) => id != suboption.id)
            }
          });
        }
      });
      this.order_options.push(option.id)
    }

    if(this.order_options.length == this.options.length){
      this.addOption(this.order_options)
    }*/
  }

}
