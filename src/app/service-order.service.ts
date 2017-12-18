import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class ServiceOrderService {

currentServiceOrder = ""

updateCurrentOrder(id) {
  this.currentServiceOrder = id;


  console.log("Current order:")
  console.log(this.currentServiceOrder);
}

currentServiceOrderInfo() {
  return this.currentServiceOrder
}

serviceOrderInfo = new Subject();

  constructor() { }

}
