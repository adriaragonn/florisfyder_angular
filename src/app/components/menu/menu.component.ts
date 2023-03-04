import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericService } from 'src/app/services/generic.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  

  showMenu_:boolean = false;
  url? : string

  constructor(
    private _router: Router,
    private _genericService: GenericService
  ) { }

  ngOnInit(): void {
    this._genericService.url_component.subscribe (
      res => {
        console.log(res)
        if(res == '/'){
          document.getElementsByClassName('item1')[0].classList.add('active')
          document.getElementsByClassName('item2')[0].classList.remove('active')
          document.getElementsByClassName('item3')[0].classList.remove('active')
        }else if (res == '/pedidos') {
          document.getElementsByClassName('item1')[0].classList.remove('active')
          document.getElementsByClassName('item2')[0].classList.add('active')
          document.getElementsByClassName('item3')[0].classList.remove('active')
        } else if (res == '/clientes') {
          document.getElementsByClassName('item1')[0].classList.remove('active')
          document.getElementsByClassName('item2')[0].classList.remove('active')
          document.getElementsByClassName('item3')[0].classList.add('active')
        }
      }
    )
  }
  
  showMenu(){
    let menu:any = document.getElementsByClassName('menu')[0]
    let button:any = document.getElementsByClassName('button')[0]
    let span: any = document.querySelectorAll('.menu-item')
    let li:any = document.querySelector('li')
    let ul: any = document.querySelectorAll('ul')
    let container: any = document.getElementsByClassName('container')[0]

    if (this.showMenu_ == false){
      menu.style.width = '120px'
      button.style.margin = '0 0 0 102px'
      li.style.padding = '0 9px'
      li.style.textAlign = 'left'
      container.style.margin = 'auto'
      span.forEach((el: { style: { display: string; }; }) => {
        el.style.display = 'inline'
      });
      this._genericService.container = true
      this.showMenu_ = true;

    } else {

      menu.style.width = '60px'
      button.style.margin = '0 0 0 42px'
      li.style.padding = ''
      li.style.textAlign = 'center'
      container.style.margin = '0'
      span.forEach((el: { style: { display: string; }; }) => {
        el.style.display = 'none'
      });
      this._genericService.container = false
      this.showMenu_ = false
    }
  }

}
