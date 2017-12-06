import { AddServiceComponent } from './add-service/add-service.component';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import "rxjs/Rx";
@Injectable()
export class AddServiceService {

  constructor(private _http: Http) { }
//when adding with sign up form
postService(post){
  console.log("service data");
   let headers = new Headers({ 'Content-Type': 'application/json'});
   let options = new RequestOptions({ headers: headers });

   return this._http.post("/serviceapi/addservice",JSON.stringify(post),options)

   .map(result => {

    return result.json();
  });
}

getAllServices() {
  return this._http.get("/serviceapi/allservices")
    .map(
    (response: Response) => {
      return response.json();
    }
    );
}
}
