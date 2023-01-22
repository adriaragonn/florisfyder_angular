import { Component, OnInit } from '@angular/core';
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

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _workService: WorksService,
    private _orderService: OrderService
  ) { }

  ngOnInit(): void {
    let id = this._activatedRoute.snapshot.paramMap.get('id')
    this._workService.getProducts(id).subscribe(
      (res:any) => {
        console.log(res.data)
        if(res.data.length == 0){
          this.nextStep()
        }else{
          this.products = res.data
        }
      }
    )
  }

  hasColors(id:any, color: string){
    let product_div:any = document.querySelectorAll(`.colors-${color}`)
    let colors = this.products.filter((el:any) => el.id == id)
    product_div.forEach((el:any) => {
      el.className ='colors  colors-visible'
    });
    this.products.forEach((el:any) => {
      if(el.colors.length == 0 && el.id == id){
        this.selectColour(el.id)
      }
    });
  }

  selectColour(product_id: any, colour_id?:any){
    this.option_selected = true
    this._orderService.addColor(product_id, colour_id)
  }

  nextStep(){
    let id:any = this._activatedRoute.snapshot.paramMap.get('id')
    this._router.navigateByUrl(`nuevo-pedido/(works:quantities/${id})`)
  }

}
