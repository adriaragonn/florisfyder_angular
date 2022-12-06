import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../global/global';

@Injectable({
  providedIn: 'root'
})
export class WorksService {

  url: string;

  constructor(
    private _http: HttpClient
  ) {
    this.url = GLOBAL.url
   }


  getWorks(){
    let headers = new HttpHeaders()
                      .set('Content-Type', 'application/json')

    return this._http.get(`${this.url}works`, {headers: headers})
  }

  getOptions(id:any){
    let headers = new HttpHeaders()
                      .set('Content-Type', 'application/json')

    return this._http.get(`${this.url}works/${id}`, {headers: headers})
  }

  getSubOptions(id:any){
    let headers = new HttpHeaders()
                      .set('Content-Type', 'application/json')

    return this._http.get(`${this.url}works/${id}/options`, {headers: headers})
  }

  getProducts(id:any){
    let headers = new HttpHeaders()
                      .set('Content-Type', 'application/json')

    return this._http.get(`${this.url}works/${id}/products`, {headers: headers})
  }

}
