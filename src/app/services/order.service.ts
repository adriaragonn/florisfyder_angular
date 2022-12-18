import { Injectable } from '@angular/core';

interface Order {
  client: {
    id: number,
    name: string,
    telephone: number
  },
  day: {
    id: number,
    date: string
  },
  work: {
    id: number,
    options: [],
    product_id: number,
    color_id: number,
    quantity: number
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
  order: Order | undefined


  constructor() { }


  addDay(id:any){
    this.day = []
    this.day.push({
      day: {
        id: id
      }
    })
  }

  addClient(client: any, clientId?: any){
    this.client = []
    if(clientId == undefined){
      this.client.push({
        client: {
          id: null,
          name: client.value.name,
          telephone: client.value.telephone
        }
      })
    }else{
      this.client.push({
        client: {
          id: clientId,
          name: client.value.name,
          telephone: client.value.telephone
        }
      })
    }
  }

  addOption(options:any, work_id: any){
    this.work = [];
    this.work.push({
      id: work_id,
      options: options
    })
  }

  addColor(product_id: any, colour_id?:any){
    this.color = []
    this.color.push({
      product_id: product_id,
      color_id: colour_id
    })
    console.log(this.color)
  }
}
