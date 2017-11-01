import { Injectable } from '@angular/core';

@Injectable()
export class ServiceOrderService {

currentServiceOrder = {
  _id: "",
  cusFirstName: "",
  cusLastName: "",
  cusPhoneNumber: "",
  cusEmail: "",
  cusCarVin: "",
  cusCarMake: "",
  cusCarModel: "",
  cusCarYear: "",
  cusCarService: "",
  cusCarServiceTwo: "",
  cusCarServiceThree: "",
  cusAttendant: "",
  status: "",
  location: "",

}

updateCurrentOrder(id, fname, lname, phnumber, email, vin, make, model, year, serviceOne, serviceTwo, serviceThree, attendant, status, location) {
  this.currentServiceOrder._id = id;
  this.currentServiceOrder.cusFirstName = fname;
  this.currentServiceOrder.cusLastName = lname;
  this.currentServiceOrder.cusPhoneNumber = phnumber;
  this.currentServiceOrder.cusEmail = email;
  this.currentServiceOrder.cusCarVin = vin;
  this.currentServiceOrder.cusCarMake = make;
  this.currentServiceOrder.cusCarModel = model;
  this.currentServiceOrder.cusCarYear = year;
  this.currentServiceOrder.cusCarService = serviceOne;
  this.currentServiceOrder.cusCarServiceTwo = serviceTwo;
  this.currentServiceOrder.cusCarServiceThree = serviceThree;
  this.currentServiceOrder.cusAttendant = attendant;
  this.currentServiceOrder.status = status;
  this.currentServiceOrder.location = location;

  console.log("Current order:")
  console.log(this.currentServiceOrder);
}

currentServiceOrderInfo() {
  return this.currentServiceOrder
}

  constructor() { }

}
