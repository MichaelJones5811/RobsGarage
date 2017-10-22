
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Customer} from '../customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {
  customer: Customer;
  customerFrm: FormGroup;
  customers: Array<Customer>
  
    constructor(private _dataService: DataService, private router: Router,private fb: FormBuilder) { }
  
    ngOnInit() {
      this.customerFrm = this.fb.group({
        'fName' : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(45)])],
        'lName' : [null, Validators.compose([Validators.required, Validators.minLength(10)])],
        'phNumber' : [null, Validators.compose([Validators.required, Validators.minLength(10)])],
        'email' : [null, Validators.compose([Validators.required, Validators.minLength(10)])]
      });
    }
  
    postCustomer(customer: Customer) {
      this._dataService.postCustomers(customer)
      .subscribe(newCustomer => {
        this.customers.push(newCustomer);
        //this.router.navigateByUrl('/');
        console.log(Customer);
      })
    }
  }
