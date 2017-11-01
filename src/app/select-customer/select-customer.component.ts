import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { DataService } from '../data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-select-customer',
  templateUrl: './select-customer.component.html',
  styleUrls: ['./select-customer.component.css']
})
export class SelectCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
  }

  errorMsg = ""

  onSubmit(form) {
    console.log(form.value.custSearchPhone);
    this.dataService.getCustomer(form.value.custSearchPhone)
    .subscribe(
      (response) => {
        if (response.length > 0) {
        console.log(response);
        console.log(response[0]._id);
        const customerId = response[0]._id;
        const firstName = response[0].fName;
        const lastName = response[0].lName;
        const phoneNumber = response[0].phNumber;
        const email = response[0].email;
        this.customerService.updateCurrentCust(customerId, firstName, lastName, phoneNumber, email);
        this.errorMsg = "";
        this.router.navigate(["/customerdashboard"]);
      } else {
        this.errorMsg = "Number Not In Database";
      }
      },
      (error) => console.log(error)
      );
  }

}
