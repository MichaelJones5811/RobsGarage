import { Injectable } from '@angular/core';
import { Customer } from './customer'
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import "rxjs/Rx";



@Injectable()
export class DataService {

  result: any;

  constructor(private _http: Http) { }

  getCustomers() {
    return this._http.get("/api/all")
      .map(
      (response: Response) => {
        this.result = response.json();
        return response.json();
      }
      );
  }
  getCustomer(id) {
    return this._http.get("/api/all/" + id)
      .map(
      (response: Response) => {
        this.result = response.json();
        return response.json();
      }
      );
  }

  //when adding with sign up form
  postCustomers(post: Customer) {
    console.log(Customer + "service data");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post("/api/addCustomer", JSON.stringify(post), options)
      .map(result => this.result = result.json().data);
  }

  //when adding with service order
  addCustomer(post) {
    console.log(Customer + "service data");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post("/api/addCustomer", JSON.stringify(post), options)
      .map(result => {
        this.result = result.json().data
        return result.json()
      });
  }


  updateCustomer(post: Customer, id) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('/api/update/' + id, JSON.stringify(post), options)
      .map(result => this.result = result.json());
  }

  postServiceOrder(post) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post("/api/addserviceorder", JSON.stringify(post), options)
      .map(result => {
        this.result = result.json();
        return result.json();
      });
  }

  getServiceOrders() {
    return this._http.get("/api/allserviceorders")
      .map(
      (response: Response) => {
        this.result = response.json();
        return response.json();
      }
      );
  }

  getServiceOrder(id) {
    return this._http.get("/api/allserviceorders/" + id)
      .map(
      (response: Response) => {
        this.result = response.json();
        return response.json();
      }
      );
  }

  updateServiceOrder(id, post) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.put("/api/updateserviceorder/" + id, JSON.stringify(post), options)
      .map(result => {
        this.result = result.json();
        return result.json();
      });
  }

  addServiceOrderNote(id, post) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.put("/api/addserviceordernote/" + id, JSON.stringify(post), options)
      .map(result => {
        this.result = result.json();
        return result.json();
      });
  }

}
