import { EmployeeSignInComponent } from './employee-sign-in/employee-sign-in.component';
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
import { CustomerLandingPageComponent} from"./customer-landing-page/customer-landing-page.component";
import { CustomerPortalComponent} from"./customer-portal/customer-portal.component";
import { ViewCustomerServiceOrderComponent } from './view-customer-service-order/view-customer-service-order.component';
import { AuthGuard } from "./auth-guard.service";
import { AdminGuard } from "./admin-guard.service";
import { AddGuard } from "./add-guard.service";

export const routes: Routes = [

  {
    path: '',
    component: EmployeeSignInComponent
  },
  {

    path: 'landingpage',
    component: LandingPageComponent
  },
  {
    path: 'nouser', canActivate: [AddGuard],
    component: UserSignupComponent

  },
  {
    path: 'signupform', canActivate: [AuthGuard],
    component: SignUpFormComponent
  },
  {
    path: 'landingpage', canActivate: [AuthGuard],
    component: LandingPageComponent
  },
  {
    path: 'findcustomer', canActivate: [AuthGuard],
    component: SelectCustomerComponent
  },
  {
    path: 'customerdashboard', canActivate: [AuthGuard],
    component: CustomerComponent
  },
  {
    path: 'createserviceorder', canActivate: [AuthGuard],
    component: ServiceOrderComponent
  },
  {
    path: 'servicedashboard', canActivate: [AuthGuard],
    component: ServiceDashboardComponent
  },
  {
    path: 'viewserviceorder', canActivate: [AuthGuard],
    component: ViewServiceOrderComponent
  },
  {
    path: 'signin',
    component: EmployeeSignInComponent
  },
  {

    path: 'addservice', canActivate: [AdminGuard],
    component: AddServiceComponent
  },
  {
    path: 'usersignup', canActivate: [AdminGuard],
    component: UserSignupComponent
  },
  {
    path: 'customerlanding',
    component: CustomerLandingPageComponent
  },
  {
    path: 'customerportal',
    component: CustomerPortalComponent
  },
  {
    path: 'viewcustomerserviceorder',
    component: ViewCustomerServiceOrderComponent
  },
  {
    path: 'landingpage',
    redirectTo: 'landingpage',
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },





];
