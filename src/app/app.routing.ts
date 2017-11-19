import { Routes } from '@angular/router';
import { AddServiceService } from './add-service.service';
//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
// import { RouterModule } from '@angular/router';
// import { HttpModule } from '@angular/http';
//import { DataService } from './data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceOrderComponent } from './service-order/service-order.component';
import { CustomerComponent } from './customer/customer.component';
import { SelectCustomerComponent } from './select-customer/select-customer.component';
import { CustomerService } from './customer.service';
import { ServiceDashboardComponent } from './service-dashboard/service-dashboard.component';
import { ServiceOrderService } from './service-order.service';
import { ViewServiceOrderComponent } from './view-service-order/view-service-order.component';

import { AddServiceComponent } from './add-service/add-service.component';

import { UserSignupComponent } from './user-signup/user-signup.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingPageComponent
      },
      {
        path: 'signupform',
        component: SignUpFormComponent
      },
      {
        path: 'findcustomer',
        component: SelectCustomerComponent
      },
      {
        path: 'customerdashboard',
        component: CustomerComponent
      },
      {
        path: 'createserviceorder',
        component: ServiceOrderComponent
      },
      {
        path: 'servicedashboard',
        component: ServiceDashboardComponent
      },
      {
        path: 'viewserviceorder',
        component: ViewServiceOrderComponent
      },
      {

        path: 'addservice',
        component: AddServiceComponent
      },
      {
        path: 'usersignup',
        component: UserSignupComponent
      },
      {
        path: 'addservice',
        component: AddServiceComponent
      },
      {
      path: '',
      redirectTo: 'landingpage',
      pathMatch: 'full'
      },
        
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'

      }




];