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
  order_options: any = []

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _workService: WorksService,
    private _orderService: OrderService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    let id:any = this._activatedRoute.snapshot.paramMap.get('id')
    this._workService.getOptions(id).subscribe(
      (res:any) => {
        console.log(res.data)
        if(res.data[0].options.length == 0){
          this._router.navigateByUrl(`nuevo-pedido/(works:products/${id})`)
        }else {
          this.options = res.data[0].options
        }
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

  addOption(options:any, work_id: any){
    this._orderService.addOption(options, work_id)
  }

  nextStep(){
    let id:any = this._activatedRoute.snapshot.paramMap.get('id')
    this.addOption(this.order_options, id)
    this._router.navigateByUrl(`nuevo-pedido/(works:products/${id})`)
  }

  selectedOptions(option:any){
    let work:any = this.options.filter((el:any) => el.work == option.work)[0];
  
    work.options.forEach((el:any)=> {
      if(el.options.length > 0){
        this.addOrderOption(option)
        el.options.forEach((element: any) => {
          if(element.id == option.id){
            document.querySelector(`.btn-rama-${element.id}`)?.classList.remove('btn-info', 'transparency')
            document.querySelector(`.btn-rama-${element.id}`)?.classList.add('btn-success')
          }
        })
      }else if(el.id == option.id){
        document.querySelector(`.sub-option-${el.id}`)?.classList.remove('btn-info', 'transparency')
        document.querySelector(`.sub-option-${el.id}`)?.classList.add('btn-success')
        this.addOrderOption(option)
      }else{
        document.querySelector(`.sub-option-${el.id}`)?.classList.add('transparency')
      }
    });
  }

  addOrderOption(option:any ){
    let work = this.options.filter((el: any) => el.work == option.work)[0].options
    if(this.order_options.length == 0){
      this.order_options.push(option.id)
    }else if(this.order_options.length > 0 ){
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
  }

}
