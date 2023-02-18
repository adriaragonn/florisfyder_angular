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
  search: boolean = false
  message: string = '';
  select_id: any;
  selectedClient: any;
  wordToSearch: any;
  load: boolean = false;

  constructor(
    private _genericService: GenericService,
    private _orderService: OrderService
  ) {
    this.client = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(null, [Validators.minLength(3)]),
      telephone: new FormControl(null, [Validators.pattern(/^[0-9]\d{8,10}$/)])
    })
  }

  ngOnInit(): void {
  }

  closeModal(){
    this.client.reset()
  }

  newClient(){
    if(this.client.value.name != null && this.client.status == 'VALID'){
      this._orderService.addClient(this.client)
    }else {
      this._orderService.addClient(this.selectedClient)
    }
  }

  openSearchClient(){
    if(this.search) {
      this.search = false
      this.clientSearched = []
    }else {
      this.search = true
    }

  }

  searchClient(){
    if(this.wordToSearch.length > 0){
      this.load = true;
      setTimeout(()=>{
        this._genericService.searchClient(this.wordToSearch).subscribe(
          (res:any) => {
            if(res.data.length == 0){
              this.message = 'No se ha encontrado.'
              this.clientSearched = []
              this.load = false;
            }else {
              this.message = ''
              this.clientSearched = res.data
              this.load = false;
            }
          }
        )

        
      }, 2000)

    } else {
      this.clientSearched = []
    }
  }

  clientSelected(id: any, name: string, telephone: number){
    
    this.clientSearched.forEach((el: any) => {
      if(el.id != id){
        document.getElementsByClassName(`client${el.id}`)[0].classList.remove('active')
      }else{
        document.getElementsByClassName(`client${id}`)[0].classList.add('active')
        this.selectedClient = {
          id,
          name,
          telephone
        }
        this.newClient()
      }
    });

  }

}
