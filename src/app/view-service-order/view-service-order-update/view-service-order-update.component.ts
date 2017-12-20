import { Component, OnInit } from '@angular/core';
import { ServiceOrderService } from "../../service-order.service";
import { DataService } from "../../data.service";
import { AddServiceService } from "../../add-service.service";

@Component({
  selector: 'app-view-service-order-update',
  templateUrl: './view-service-order-update.component.html',
  styleUrls: ['./view-service-order-update.component.css']
})
export class ViewServiceOrderUpdateComponent implements OnInit {

  constructor(private serviceOrderService: ServiceOrderService,
              private dataService: DataService, private addServiceService: AddServiceService) { }

  orderId = "";
  orderNotes = [];
  curCarServiceArray = [{type: "", price: "", desc: "", status: ""}];
  allCarServiceArray = [{type: "", price: "", desc: "", status: ""}];
  curAddServiceArray = [];

  ngOnInit() {
    this.orderId = this.serviceOrderService.currentServiceOrderInfo();
    this.loadAllServices();
    this.getCurrentServices(this.orderId);
  }





  onSubmit(form) {
    if(form.value.cusAttendant == ""  || form.value.cusAttendant == null) {
      delete form.value.cusAttendant;
    }
    if(form.value.status == "" || form.value.status == null) {
      delete form.value.status;
    }
    if(form.value.location == "" || form.value.location == null) {
      delete form.value.location;
    }

    console.log(form.value);
    console.log(this.orderId);

    this.dataService.updateServiceOrder(this.orderId, form.value)
    .subscribe(
      res => {
        this.serviceOrderService.serviceOrderInfo.next(this.orderId);
      }
    )

  }

  onNoteSubmit(form) {
    console.log(form.value);
    this.dataService.addServiceOrderNote(this.orderId, form.value)
    .subscribe(
      res => {
        this.serviceOrderService.serviceOrderInfo.next(this.orderId);
      }
    )
  }

  getCurrentServices(value) {
    this.dataService.getServiceOrder(this.orderId)
    .subscribe(
      (response) => {
        console.log("Array for services: ", response[0]);
        for (var i = 0; i < response[0].cusCarService.length; i++) {
          this.curCarServiceArray.push(response[0].cusCarService[i]);
        }
        console.log("Array after function ", this.curCarServiceArray);
    },
      (error) => console.log(error)
    )
  }

  loadAllServices() {
    this.addServiceService.getAllServices()
    .subscribe(
      (services: any[]) => {
        console.log(services);
        for (var i = 0; i < services.length; i++) {
          this.allCarServiceArray.push(services[i]);
        }
        console.log(this.allCarServiceArray);
      },
      (error) => console.log(error)
      );
  }

  completeService(form) {
    console.log("Button value is: ", form.value.curCarService);
    var jsonString = form.value.curCarService;
    var jsonServiceObj = JSON.parse(jsonString);
    jsonServiceObj["newStatus"] = "complete";
    console.log("JSON OBJ: ", jsonServiceObj);
    this.dataService.updateServiceOrderService(this.orderId, jsonServiceObj)
    .subscribe(
      res => {
        this.serviceOrderService.serviceOrderInfo.next(this.orderId);
      }
    )
  }

  removeService(form) {
    var jsonString = form.value.curCarService;
    var jsonServiceObj = JSON.parse(jsonString);
    console.log("JSON OBJ: ", jsonServiceObj);
    this.dataService.removeServiceOrderService(this.orderId, jsonServiceObj)
    .subscribe(
      res => {
        this.serviceOrderService.serviceOrderInfo.next(this.orderId);
      }
    )
  }

  addToProposeServArray(form) {
    var jsonString = form.value.newCarService;
    var jsonServiceObj = JSON.parse(jsonString);
    this.curAddServiceArray.push(jsonServiceObj);
  }
}
