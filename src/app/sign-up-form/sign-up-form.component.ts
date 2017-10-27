
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
  // this set variable for you object Customer and the from group that is used
  customer: Customer;
  customerFrm: FormGroup;
  // This array that is used  to push to 
  customers: Customer[] = [];
  
    constructor(private _dataService: DataService, private router: Router,private fb: FormBuilder, aR: ActivatedRoute) { }
  
    ngOnInit() {
      // this is the build of the form used in the html
      this.customerFrm = this.fb.group({
        'fName' : [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(45)])],
        'lName' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        'phNumber' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        'email' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        'make' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        'model' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        'vin' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        'year' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        'engine' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        'tire' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
        'history' : [null, Validators.compose([Validators.required, Validators.minLength(4)])]
      });
    
    }
    //postCustomer function 
    postCustomer(customerId, customer: Customer) {
      if (customerId !== undefined) {
        
              this._dataService.updateCustomer(customer, customerId._id)
                .subscribe(updateCustomer => {              
                })
            } else {
      console.log(customer);
      this._dataService.postCustomers(customer)
      .subscribe(newCustomer => {
        this.customers.push(newCustomer);       
      })
    }
  }
  }