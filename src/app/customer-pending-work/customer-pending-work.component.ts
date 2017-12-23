import { Component, OnInit } from '@angular/core';
import { AddServiceService } from "../add-service.service";
import { DataService } from "../data.service";

@Component({
  selector: 'app-customer-pending-work',
  templateUrl: './customer-pending-work.component.html',
  styleUrls: ['./customer-pending-work.component.css']
})
export class CustomerPendingWorkComponent implements OnInit {

  constructor(private dataService: DataService, private addServiceService: AddServiceService) { }

  ngOnInit() {
    this.dataService.getUserInfo().subscribe(
      (user) => {
          console.log(user);
      }
    );
  }

  getCustomerOrders(email) {
    this.dataService.getServiceOrder(email).subscribe(
      (orders) => {
        console.log(orders);
      }
    )
  }

}
