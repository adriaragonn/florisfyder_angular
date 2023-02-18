import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { GLOBAL } from '../global/global';
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

  @Output() work_id_emit: EventEmitter<any> = new EventEmitter()
  @Output() products: EventEmitter<any> = new EventEmitter()
  @Output() options: EventEmitter<any> = new EventEmitter()
  @Output() quantities: EventEmitter<any> = new EventEmitter()
  @Output() day_selected: EventEmitter<any> =  new EventEmitter()
  @Output() client_selected: EventEmitter<any> = new EventEmitter

  url: string = GLOBAL.url
  day: any = []
  client: any = []
  color: any = []
  work: any = []
  work_id: any; 
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


  constructor(
    private _workService: WorksService,
    private _http: HttpClient
  ) {}


  addDay(id:any, date: string){
    this.day = []
    this.order.day.id = id
    this.order.day.date = date
    this.day_selected.emit(date)
  }

  addClient(client: any){
    this.client = []
    if(client.status == 'VALID'){
      this.order.client.id = null
      this.order.client.name = client.value.name,
      this.order.client.telephone = client.value.telephone
      this.client_selected.emit(client)
    }else{
      this.order.client.id = client.id
      this.order.client.name = client.name,
      this.order.client.telephone = client.telephone
      this.client_selected.emit(client)
    }

    
  }

  addWork(id:any, work: string){
    this.work = [];
    this.work_id = id;
    this.order.work.id = Number(id)
    this.work_id_emit.emit(id)
  }

  addOption(options_id?:any, work_id?: any, work?: any){
    this.work = [];
    console.log(options_id)
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

  getAllOrders(){
    let headers = new HttpHeaders()
                      .set('Content-Type', 'application/json')

    return this._http.get(`${this.url}orders`, {headers: headers})
  }
}




