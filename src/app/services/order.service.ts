import { Injectable } from '@angular/core';
import { WorksService } from './works.service';

interface Order {
  client: {
    id: null,
    name: string,
    telephone: string
  },
  day: {
    id: number,
    date: string
  },
  work: {
    id: number,
    options: [],
    product_id: any,
    color_id: any,
    quantity: any
  }
}


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  day: any = []
  client: any = []
  color: any = []
  work: any = []
  quantiy: any;
  order: Order = {
    client: {
      id: null,
      name: '',
      telephone: ''
    },
    day: {
      id: 0,
      date: ''
    },
    work: {
      id: 0,
      options: [],
      product_id: undefined,
      color_id: undefined,
      quantity: undefined
    }
  };
  resume: Order = {
    'client': {
      id: null,
      name: '',
      telephone: ''
    },
    'day': {
      id: 0,
      date: ''
    },
    'work': {
      id: 0,
      options: [],
      product_id: undefined,
      color_id: undefined,
      quantity: undefined
    }
  };


//TEEEEESTTTT
test = {
  client: {
      id: null,
      name: "Juan",
      telephone: 66666666
  },
  day: {
      id: 2,
      date: ""
  },
  work: {
      id: 1,
      options: [
          9,
          15,
          18,
          22
      ],
      product_id: 7,
      quantity: 18
  }
}
//

  constructor(
    private _workService: WorksService
  ) {}


  addDay(id:any, date: string){
    this.day = []
    this.order.day.id = id
    this.order.day.date = date
    
  }

  addClient(client: any, clientId?: any){
    console.log(client)
    this.client = []
    if(clientId == undefined){
      this.order.client.id = null
      this.order.client.name = client.value.name,
      this.order.client.telephone = client.value.telephone

    }else{
      this.order.client.id = clientId
      this.order.client.name = client.value.name,
      this.order.client.telephone = client.value.telephone
    }
  }

  addOption(options_id?:any, work_id?: any, work?: any){
    console.log(work)
    this.work = [];
    this.order.work.id = Number(work_id)
    this.order.work.options = options_id


  }

  addColor(product_id: any, colour_id?:any){
    this.color = []
    this.order.work.color_id = colour_id
    this.order.work.product_id = product_id
    this.color.push({
      product_id: product_id,
      color_id: colour_id
    })
  }

  addQuantity(quantity: number){
    
    this.quantiy = quantity;
    this.order.work.quantity = quantity
  }

  getOrder(){
    
    //this.order.work = this.work



    console.log(this.order)
  }

  confirmOrder(){
    console.log(this.order)
    return this._workService.confirmOrder(this.order)
  }
}


