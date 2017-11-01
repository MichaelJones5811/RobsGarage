import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-service-order',
  templateUrl: './service-order.component.html',
  styleUrls: ['./service-order.component.css']
})
export class ServiceOrderComponent implements OnInit {
    cusCarService = "";
    cusCarServiceTwo = "";
    cusCarServiceThree = "";
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  successMessage = "";

  onSubmit(form) {
    // remove empty service fields and then post service
    if (form.value.cusCarServiceTwo == "") {
      delete form.value.cusCarServiceTwo;
    }
    if (form.value.cusCarServiceThree == "") {
      delete form.value.cusCarServiceThree;
    }

    form.value.status = "Pending";
    form.value.location = "Lot";
    this.dataService.postServiceOrder(form.value)
    .subscribe(info => {
      console.log(info);
      this.successMessage = "Service Order Created";
    });

    //add customer if phone number is not already in database
    console.log(form.value.cusPhoneNumber);
    this.dataService.getCustomer(form.value.cusPhoneNumber)
    .subscribe(
      (response) => {
        if (response.length > 0) {
        console.log("already in database");
      } else {
        const customerInfo = {
          fName: form.value.cusFirstName,
          lName: form.value.cusLastName,
          phNumber: form.value.cusPhoneNumber,
          email: form.value.cusEmail,
          make: form.value.cusCarMake,
          model: form.value.cusCarModel,
          vin: form.value.cusCarVin,
          year: form.value.cusCarYear
        };

        this.dataService.addCustomer(customerInfo)
        .subscribe(res => {
          console.log("this was a success");
        })
      }
      },
      (error) => console.log(error)
      );


  }

}
