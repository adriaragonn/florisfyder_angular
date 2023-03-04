import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { GLOBAL } from '../global/global';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  url: string
  @Output() url_component: EventEmitter<any> = new EventEmitter
  container: boolean = false;


  constructor(
    private _http: HttpClient
  ) {
    this.url = GLOBAL.url
   }


   getDays(){
    let headers = new HttpHeaders()
                      .set('Content-Type', 'application/json')

    return this._http.get(this.url+'days', {headers:headers})
   }

   searchClient(name: string){
    let headers = new HttpHeaders()
                      .set('Content-Type', 'application/json')

    return this._http.get(`${this.url}clients?search=${name}`)
   }

}
