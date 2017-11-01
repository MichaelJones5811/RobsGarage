import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { ServiceOrderService } from "../service-order.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-service-dashboard',
  templateUrl: './service-dashboard.component.html',
  styleUrls: ['./service-dashboard.component.css']
})
export class ServiceDashboardComponent implements OnInit {

    orders = [];

  constructor(private dataService: DataService,
              private serviceOrderService: ServiceOrderService,
              private router: Router) { }

  ngOnInit() {
      this.dataService.getServiceOrders()
      .subscribe(
        (order: any[]) => this.orders = order,
        (error) => console.log(error)
        );
  }

  selectOrder(value) {
    this.dataService.getServiceOrder(value)
    .subscribe(
      (response) => {
        if (response.length > 0) {
          const info = response[0];
          const id = info._id;
          const firstName = info.cusFirstName;
          const lastName = info.cusLastName;
          const phoneNumber = info.cusPhoneNumber;
          const email = info.cusEmail;
          const vin = info.cusCarVin;
          const make = info.cusCarMake;
          const model = info.cusCarModel;
          const year = info.cusCarYear;
          const serviceOne = info.cusCarService;
          const serviceTwo = info.cusCarServiceTwo;
          const serviceThree = info.cusCarServiceThree;
          const attendant = info.cusAttendant;
          const status = info.status;
          const location = info.location;

          this.serviceOrderService.updateCurrentOrder(id, firstName, lastName, phoneNumber, email, vin, make, model, year, serviceOne, serviceTwo, serviceThree, attendant, status, location);

          this.router.navigate(["/viewserviceorder"]);


        }
      },
      (error) => console.log(error)
    )
  }

}
