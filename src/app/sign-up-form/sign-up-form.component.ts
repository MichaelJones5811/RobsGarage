
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Customer} from '../customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  
    constructor(private _dataService: DataService) { }
  
    ngOnInit() {
      // this is the build of the form used in the html
      // this.customerFrm = this.fb.group({
      //   'fName' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(45)])],
      //   'lName' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      //   'phNumber' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      //   'email' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      //   'make' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      //   'model' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      //   'vin' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      //   'year' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      //   'engine' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      //   'tire' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      // });
    
    }
    
    
    //postCustomer function 
     onSubmit(s){
      
       this._dataService.postCustomers(s.value)
       .subscribe(info => console.log(info )
       
       
      )}
     
  }