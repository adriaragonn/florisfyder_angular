import { Component, Input, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es'

import { Tooltip } from 'bootstrap'

registerLocaleData(localeEs, 'es')

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.scss']
})
export class Card3Component implements OnInit {

  @Input() totalAmount: any;
  totalAmountBackup: any
  showBill?: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.totalAmountBackup = this.totalAmount
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')[0]
    const tooltipList = [tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
  }

  show(){
    if(this.showBill == true){
      this.showBill = false
    }else {
      this.showBill = true
    }
  }

}
