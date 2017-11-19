import { AddServiceService } from './../add-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  constructor(private _addServiceService: AddServiceService) { }

  ngOnInit() {
  }
  onSubmit(f){
    this._addServiceService.postService(f.value)
    .subscribe(info => console.log(info )
    )}
}
