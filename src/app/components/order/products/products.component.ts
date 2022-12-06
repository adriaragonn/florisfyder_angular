import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _workService: WorksService
  ) { }

  ngOnInit(): void {
    let id = this._activatedRoute.snapshot.paramMap.get('id')
    this._workService.getProducts(id).subscribe(
      (res:any) => {
        this.products = res.data
        console.log(this.products)
      }
    )
  }

  hasColors(id:any, color: string){
    let product_div:any = document.querySelector(`.colors-${color}`)
    let colors = this.products.filter((el:any) => el.id == id)
    let template:any ='';
    if(colors[0].colors.length > 0){
      colors[0].colors.forEach((el:any) => {
        template += `
        <a class="btn color" style="background: ${el.code}; padding: 0.8rem;width: 1.8rem;border: 1px solid black; margin: 0.3rem"></a>
        `
      });
      product_div.innerHTML = template
    }

  }

}
