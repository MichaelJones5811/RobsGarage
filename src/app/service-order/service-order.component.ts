import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { AddServiceService } from "../add-service.service";

@Component({
  selector: 'app-service-order',
  templateUrl: './service-order.component.html',
  styleUrls: ['./service-order.component.css']
})
export class ServiceOrderComponent implements OnInit {
    cusCarService = [];
    cusCarServiceOne = "";
    cusCarServiceTwo = "";
    cusCarServiceThree = "";
    cusCarServiceFour = "";
    cusCarServiceFive = "";
    cusCarServiceSix = "";
    cusCarServiceSeven = "";
    cusCarServiceEight = "";
    cusCarServiceNine = "";
    cusCarServiceTen = "";
    cusCarServiceArray = [""];
  constructor(private dataService: DataService, private addServiceService: AddServiceService) { }

  ngOnInit() {
    this.addServiceService.getAllServices()
    .subscribe(
      (services: any[]) => {
        console.log(services);
        for (var i = 0; i < services.length; i++) {
          this.cusCarServiceArray.push(services[i].type);
        }
        console.log(this.cusCarServiceArray);
      },
      (error) => console.log(error)
      );
  }

  successMessage = "";

  onSubmit(form) {
    // remove empty service fields and then post service
    this.cusCarService = [];
    if (form.value.cusCarServiceOne != "" && form.value.cusCarServiceOne != null) {
      this.cusCarService.push(form.value.cusCarServiceOne);
    }
    if (form.value.cusCarServiceTwo != "" && form.value.cusCarServiceTwo != null) {
      this.cusCarService.push(form.value.cusCarServiceTwo);
    }
    if (form.value.cusCarServiceThree != "" && form.value.cusCarServiceThree != null) {
      this.cusCarService.push(form.value.cusCarServiceThree);
    }
    if (form.value.cusCarServiceFour != "" && form.value.cusCarServiceFour != null) {
      this.cusCarService.push(form.value.cusCarServiceFour);
    }
    if (form.value.cusCarServiceFive != "" && form.value.cusCarServiceFive != null) {
      this.cusCarService.push(form.value.cusCarServiceFive);
    }
    if (form.value.cusCarServiceSix != "" && form.value.cusCarServiceSix != null) {
      this.cusCarService.push(form.value.cusCarServiceSix);
    }
    if (form.value.cusCarServiceSeven != "" && form.value.cusCarServiceSeven != null) {
      this.cusCarService.push(form.value.cusCarServiceSeven);
    }
    if (form.value.cusCarServiceEight != "" && form.value.cusCarServiceEight != null) {
      this.cusCarService.push(form.value.cusCarServiceEight);
    }
    if (form.value.cusCarServiceNine != "" && form.value.cusCarServiceNine != null) {
      this.cusCarService.push(form.value.cusCarServiceNine);
    }
    if (form.value.cusCarServiceTen != "" && form.value.cusCarServiceTen != null) {
      this.cusCarService.push(form.value.cusCarServiceTen);
    }

    form.value.status = "Pending";
    form.value.location = "Lot";
    form.value.cusCarService = this.cusCarService;
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
