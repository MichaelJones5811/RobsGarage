import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

  currentCustomer = {
    _id: "",
    fName: "",
    lName: "",
    phNumber: "",
    email: ""
  };


  updateCurrentCust(id, fname, lname, phnumber, email) {
    this.currentCustomer._id = id;
    this.currentCustomer.fName = fname;
    this.currentCustomer.lName = lname;
    this.currentCustomer.phNumber = phnumber;
    this.currentCustomer.email = email;
    console.log("Current Customer:")
    console.log(this.currentCustomer);
  }

  currentCustomerInfo() {
    return this.currentCustomer;
  }

  constructor() { }

}
