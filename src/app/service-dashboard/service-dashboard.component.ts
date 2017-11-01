import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-service-dashboard',
  templateUrl: './service-dashboard.component.html',
  styleUrls: ['./service-dashboard.component.css']
})
export class ServiceDashboardComponent implements OnInit {

    orders = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
      this.dataService.getServiceOrders()
      .subscribe(
        (order: any[]) => this.orders = order,
        (error) => console.log(error)
        );
  }

}
