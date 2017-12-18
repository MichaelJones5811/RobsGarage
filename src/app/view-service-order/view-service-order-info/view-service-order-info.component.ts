import { Component, OnInit } from '@angular/core';
import { ServiceOrderService } from "../../service-order.service";
import { DataService } from "../../data.service";

@Component({
  selector: 'app-view-service-order-info',
  templateUrl: './view-service-order-info.component.html',
  styleUrls: ['./view-service-order-info.component.css']
})
export class ViewServiceOrderInfoComponent implements OnInit {

  constructor(private serviceOrderService: ServiceOrderService,
              private dataService: DataService) { }
    orderId = "";
    orderNotes = [];
    orderInfo: any;
  ngOnInit() {
    this.orderId = this.serviceOrderService.currentServiceOrderInfo();

    this.getOrderInfo(this.orderId);
    this.serviceOrderService.serviceOrderInfo.subscribe(
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
        this.orderNotes = response[0].notes;
        console.log(this.orderInfo);
        console.log(this.orderInfo.notes);
    },
      (error) => console.log(error)
    )
  }

}
