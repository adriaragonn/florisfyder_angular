import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenericService } from 'src/app/services/generic.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  container?: any;

  constructor(
    private _router: Router,
    private _genericService: GenericService
  ) { }

  ngOnInit(): void {
    let containerChart = document.getElementById('container')
    let container: any = document.getElementsByClassName('container')[0]
    if(this._genericService.container){
      container.style.margin = 'auto'
    }else {
      container.style.margin = '0'
    }
    this._genericService.url_component.emit(this._router.url)

    
  }

}
