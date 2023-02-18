import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any;
  option_selected: any = false
  work_id: any;
  hasColor: boolean = false;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _workService: WorksService,
    private _orderService: OrderService
  ) { }

  ngOnInit() {
    this._orderService.work_id_emit.subscribe(
      hasId => {
        this.products = []
        this._workService.getProducts(hasId).subscribe(
          (res:any) => {
            if(res.data.length == 0){
              
              this._orderService.products.emit(false)
              this.products = []
              
            }else{
              this._orderService.products.emit(true)
              
              this.products = res.data
            }
          }
        )
      }
    )
  }

  hasColors(id:any, product: string){

    this.products.forEach((el:any) => {
      if(el.colors.length == 0 && el.id == id){
    
        this.selectColour(el.id) 
      }else{
        this.products.forEach((el:any) => {
          if(el.product == product){
            for(let i = 0; el.colors.length > i; i++){
              document.getElementsByClassName(`colors-${product}`)[i].classList.remove('colors-hidden')
              document.getElementsByClassName(`colors-${product}`)[i].classList.add('colors', 'colors-visible')
            }
          }else{
            for(let i = 0; el.colors.length > i; i++){
              document.getElementsByClassName(`colors-${el.product}`)[i].classList.add('colors-hidden')
              document.getElementsByClassName(`colors-${el.product}`)[i].classList.remove('colors', 'colors-visible')
            }
          }
        });
        
      }
    });
  }

  selectColour(product_id: any, colour_id?:any){
    
    this.option_selected = true
    this._orderService.addColor(product_id, colour_id)
    this.products.forEach((element: any) => {
      if(element.colors.length != 0){
        element.colors.forEach((el: any) => {
          if(element.id == product_id){
            if(el.id == colour_id){
              document.getElementById(`color-${colour_id}-${element.product}`)?.classList.remove('border', 'transparency')
              document.getElementById(`color-${colour_id}-${element.product}`)?.classList.add('color-selected')
            }else{
              document.getElementById(`color-${el.id}-${element.product}`)?.classList.add('border' , 'transparency')
              document.getElementById(`color-${el.id}-${element.product}`)?.classList.remove('color-selected')
            }
          }
        })
      }
    })
  }


}
