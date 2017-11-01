import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  fullName = "";
  phoneNumber = "";
  email = "";

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    const currentCustomer = this.customerService.currentCustomerInfo();
    this.fullName = currentCustomer.fName + currentCustomer.lName;
    this.phoneNumber = currentCustomer.phNumber;
    this.email = currentCustomer.email;
  }



}
