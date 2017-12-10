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




  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService, CustomerService, ServiceOrderService,AddServiceService, AuthService, AuthGuard, AdminGuard, AddGuard],
  bootstrap: [AppComponent]
})



export class AppModule { }
