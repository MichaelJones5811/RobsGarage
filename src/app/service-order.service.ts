import { Injectable } from '@angular/core';

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

  constructor() { }

}
