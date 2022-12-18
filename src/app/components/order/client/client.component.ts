import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenericService } from 'src/app/services/generic.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  client: FormGroup;
  clientSearched: any = []
  clientId: any;

  constructor(
    private _genericService: GenericService,
    private _orderService: OrderService
  ) {
    this.client = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.minLength(3)]),
      telephone: new FormControl('', [Validators.pattern('"^[0-9]*$')])
    })
  }

  ngOnInit(): void {
  }

  newClient(selected: string){
    if(selected == 'selected'){
      this._orderService.addClient(this.client, this.clientId)
    }else{
      this._orderService.addClient(this.client)
    }
  }

  searchClient(from: any){
    let client
    if(from == 'name'){
      client = this.client.value.name
    }else{
      client = this.client.value.telephone
    }
    this._genericService.searchClient(client).subscribe(
      (res:any) => {
        this.clientSearched = res.data
      }
    )
  }

}
