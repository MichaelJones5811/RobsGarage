import { AddServiceService } from './add-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceOrderComponent } from './service-order/service-order.component';
import { CustomerComponent } from './customer/customer.component';
import { SelectCustomerComponent } from './select-customer/select-customer.component';
import { CustomerService } from './customer.service';
import { ServiceDashboardComponent } from './service-dashboard/service-dashboard.component';
import { ServiceOrderService } from './service-order.service';
import { CustomerServiceOrderService } from './customer-service-order.service';
import { ViewServiceOrderComponent } from './view-service-order/view-service-order.component';
import { routes } from './app.routing';
import { AddServiceComponent } from './add-service/add-service.component';

import { UserSignupComponent } from './user-signup/user-signup.component';
import { keyframes } from '@angular/core/src/animation/dsl';
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth-guard.service";
import { AdminGuard } from "./admin-guard.service";
import { AddGuard } from "./add-guard.service";
import { EmployeeSignInComponent } from './employee-sign-in/employee-sign-in.component';
import { HeaderComponent } from './header/header.component';
import { CustomerLandingPageComponent } from './customer-landing-page/customer-landing-page.component';
import { CustomerCreateAccountComponent } from './customer-create-account/customer-create-account.component';
import { CustomerSignInComponent } from './customer-sign-in/customer-sign-in.component';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';
import { ViewServiceOrderUpdateComponent } from './view-service-order/view-service-order-update/view-service-order-update.component';
import { ViewServiceOrderInfoComponent } from './view-service-order/view-service-order-info/view-service-order-info.component';
import { CustomerPendingWorkComponent } from './customer-pending-work/customer-pending-work.component';
import { ViewCustomerServiceOrderComponent } from './view-customer-service-order/view-customer-service-order.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignUpFormComponent,
    ServiceOrderComponent,
    CustomerComponent,
    SelectCustomerComponent,
    ServiceDashboardComponent,
    ViewServiceOrderComponent,

    AddServiceComponent,


    UserSignupComponent,


    EmployeeSignInComponent,


    HeaderComponent,


    CustomerLandingPageComponent,


    CustomerCreateAccountComponent,


    CustomerSignInComponent,


    CustomerPortalComponent,


    ViewServiceOrderUpdateComponent,


    ViewServiceOrderInfoComponent,


    CustomerPendingWorkComponent,


    ViewCustomerServiceOrderComponent,




  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService, CustomerService, ServiceOrderService, CustomerServiceOrderService, AddServiceService, AuthService, AuthGuard, AdminGuard, AddGuard],
  bootstrap: [AppComponent]
})



export class AppModule { }
