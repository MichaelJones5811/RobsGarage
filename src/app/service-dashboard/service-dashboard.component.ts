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
          this.serviceOrderService.updateCurrentOrder(value);

          this.router.navigate(["/viewserviceorder"]);


        }

  logOut() {
    this.dataService.logOutUser()
    .subscribe(info => {
      console.log(info.url);
      let urlPath = info.url;
      let urlPathArray = urlPath.split('/');
      let lastSegment = urlPathArray[urlPathArray.length - 1];
      console.log(lastSegment);

      this.router.navigate([lastSegment]);
    });
  }

  loggedInInfo() {
    this.dataService.getUserInfo()
    .subscribe(
      (req: any[]) => console.log(req),
      (error) => console.log(error)
      );
  }
  }
