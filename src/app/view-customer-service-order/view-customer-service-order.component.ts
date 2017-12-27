import { Component, OnInit } from '@angular/core';
import { CustomerServiceOrderService } from "../customer-service-order.service";
import { DataService } from "../data.service";

@Component({
  selector: 'app-view-customer-service-order',
  templateUrl: './view-customer-service-order.component.html',
  styleUrls: ['./view-customer-service-order.component.css']
})
export class ViewCustomerServiceOrderComponent implements OnInit {

  constructor(private customerServiceOrderService: CustomerServiceOrderService,
              private dataService: DataService) { }
    orderId = "";
    orderInfo: any;
    currentServiceArr = [];
  ngOnInit() {
    this.orderId = this.customerServiceOrderService.currentServiceOrderInfo();

    this.getOrderInfo(this.orderId);
    this.customerServiceOrderService.serviceOrderInfo.subscribe(
      (id) => {
        this.getOrderInfo(id);
      }
    );
  }

  getOrderInfo(value) {
    this.dataService.getServiceOrder(this.orderId)
    .subscribe(
      (response) => {
        this.orderInfo = response[0];
        this.currentServiceArr = [];
        console.log(this.orderInfo);
        console.log(this.orderInfo.notes);
        for (var i = 0; i < response[0].cusCarService.length; i++) {
          if(response[0].cusCarService[i].status == "recommended" || response[0].cusCarService[i].status === "declined") {
            this.currentServiceArr.push(response[0].cusCarService[i]);
          }
        }
        console.log(this.currentServiceArr);
    },
      (error) => console.log(error)
    )
  }

}
