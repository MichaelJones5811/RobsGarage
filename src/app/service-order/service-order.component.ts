import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { AddServiceService } from "../add-service.service";

declare var $: any;
@Component({
  selector: 'app-service-order',
  templateUrl: './service-order.component.html',
  styleUrls: ['./service-order.component.css']
})
export class ServiceOrderComponent implements OnInit {
    cusCarService = [];
    cusCarServiceOne = "";
    cusCarServiceArray = [""];
    count = 0;
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
    console.log("COUNT: ", this.count);
    for (var i = 1; i < this.count + 1; i++) {
      var serviceValue = $("#cusCarService-" + i).val().trim();
      console.log("SERVICE VALUE: ", serviceValue);
      if (serviceValue != "") {
        this.cusCarService.push(serviceValue);
      }
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

  addServiceField() {
    this.count++
    var selectDiv = $("<select>");
    selectDiv.attr("id", "cusCarService-" + this.count);
    for (var i = 0; i < this.cusCarServiceArray.length; i++) {
      var option = $("<option>");
      option.attr("value", this.cusCarServiceArray[i]);
      option.text(this.cusCarServiceArray[i]);
      selectDiv.append(option);
    }
    $("#appendItemDiv").append(selectDiv);

  }

}
