import { Injectable } from '@angular/core';
import { Customer } from './customer'
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  getCustomers() {
    return this._http.get("/api/all")
      .map(result => this.result = result.json());
  }
  getCustomer(id) {
    return this._http.get("/api/all"+id)
      .map(result => this.result = result.json());
  }
  
  postCustomers(post: Customer){
   console.log(Customer + "service data");
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this._http.post("/api/addCustomer",JSON.stringify(post),options)
    .map(result => this.result = result.json().data);
  }
  updateCustomer(post: Customer, id) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/update/'+id, JSON.stringify(post), options)
      .map(result => this.result = result.json());
  }
}