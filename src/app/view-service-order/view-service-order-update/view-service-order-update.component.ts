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
  curCarServiceArray = [];
  allCarServiceArray = [];
  curAddServiceArray = [];
  allEmployeesArray = [""];

  addErrMsg = "";

  ngOnInit() {
    this.orderId = this.serviceOrderService.currentServiceOrderInfo();
    this.getCurrentServices(this.orderId);
    this.getCurrentRecServices(this.orderId);
    this.loadAllServices();
    this.loadAllEmployees();
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
        this.curCarServiceArray = [];
        for (var i = 0; i < response[0].cusCarService.length; i++) {
          if(response[0].cusCarService[i].status == "pending" || response[0].cusCarService[i].status == "complete") {
            this.curCarServiceArray.push(response[0].cusCarService[i]);
          }
        }
        console.log("Array after function ", this.curCarServiceArray);
    },
      (error) => console.log(error)
    )
  }

  getCurrentRecServices(value) {
    this.curAddServiceArray = [];
    this.dataService.getServiceOrder(this.orderId)
    .subscribe(
      (response) => {
        console.log("Array for services: ", response[0]);
        for (var i = 0; i < response[0].cusCarService.length; i++) {
          if(response[0].cusCarService[i].status == "recommended" || response[0].cusCarService[i].status == "declined") {
            this.curAddServiceArray.push(response[0].cusCarService[i]);
          }
        }
    },
      (error) => console.log(error)
    )
  }

  loadAllServices() {
    this.allCarServiceArray = [];
    this.addServiceService.getAllServices()
    .subscribe(
      (services: any[]) => {
        for (var i = 0; i < services.length; i++) {
          this.allCarServiceArray.push(services[i]);
        }
        console.log(this.allCarServiceArray);

      },
      (error) => console.log(error)
      );
  }

  loadAllEmployees() {
    this.dataService.getAllEmployees()
    .subscribe(
      res => {
        console.log("Employees ", res);
        for (var i = 0; i < res.length; i++) {
          this.allEmployeesArray.push(res[i].employeeName);
        }
      }
    )
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
        this.getCurrentServices(this.orderId);
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
        this.getCurrentServices(this.orderId);
      }
    )
  }

  addToProposeServArray(form) {
    this.addErrMsg = "";
    var jsonString = form.value.newCarService;
    var jsonServiceObj = JSON.parse(jsonString);
    for (var i = 0; i < this.curCarServiceArray.length; i++) {
      if (jsonServiceObj.type === this.curCarServiceArray[i].type) {
        this.addErrMsg = jsonServiceObj.type + " is already a current service";
        return;
      }
    }
    for (var i = 0; i < this.curAddServiceArray.length; i++) {
      if (jsonServiceObj.type === this.curAddServiceArray[i].type) {
        this.addErrMsg = jsonServiceObj.type + " is already a recommended service";
        return;
      }
    }
    var addServiceObj = {
      cusCarService: jsonServiceObj
    };
    this.dataService.addServiceOrderService(this.orderId, addServiceObj)
    .subscribe(
      res => {
        console.log("the response object is", res);
        this.serviceOrderService.serviceOrderInfo.next(this.orderId);
        this.getCurrentRecServices(this.orderId);

      }
    )
  }

  approveRecServ(form) {
    var jsonString = form.value.recCarService;
    console.log("json String: ", jsonString);
    var jsonServiceObj = JSON.parse(jsonString);
    jsonServiceObj["newStatus"] = "pending";
    console.log("JSON OBJ: ", jsonServiceObj);
    this.dataService.updateServiceOrderService(this.orderId, jsonServiceObj)
    .subscribe(
      res => {
        this.serviceOrderService.serviceOrderInfo.next(this.orderId);
        this.getCurrentServices(this.orderId);
        this.getCurrentRecServices(this.orderId);
      }
    )
  }

  declineRecServ(form) {
    var jsonString = form.value.recCarService;
    var jsonServiceObj = JSON.parse(jsonString);
    jsonServiceObj["newStatus"] = "declined";
    console.log("JSON OBJ: ", jsonServiceObj);
    this.dataService.updateServiceOrderService(this.orderId, jsonServiceObj)
    .subscribe(
      res => {
        this.serviceOrderService.serviceOrderInfo.next(this.orderId);
        this.getCurrentRecServices(this.orderId);
      }
    )
  }

  removeRecService(form) {
    var jsonString = form.value.recCarService;
    var jsonServiceObj = JSON.parse(jsonString);
    console.log("JSON OBJ: ", jsonServiceObj);
    this.dataService.removeServiceOrderService(this.orderId, jsonServiceObj)
    .subscribe(
      res => {
        this.serviceOrderService.serviceOrderInfo.next(this.orderId);
        this.getCurrentRecServices(this.orderId);
      }
    )
  }

}
