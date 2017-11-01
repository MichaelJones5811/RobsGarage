import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-service-order',
  templateUrl: './service-order.component.html',
  styleUrls: ['./service-order.component.css']
})
export class ServiceOrderComponent implements OnInit {
    cusCarService = "";
    cusCarServiceTwo = "";
    cusCarServiceThree = "";
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  successMessage = "";

  onSubmit(form) {
    if (form.value.cusCarServiceTwo == "") {
      delete form.value.cusCarServiceTwo;
    }
    if (form.value.cusCarServiceThree == "") {
      delete form.value.cusCarServiceThree;
    }
    this.dataService.postServiceOrder(form.value)
    .subscribe(info => {
      console.log(info);
      this.successMessage = "Service Order Created";
    });
  }

}
