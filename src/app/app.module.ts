import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignUpFormComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'landingpage',
        component: LandingPageComponent
      },
      {
        path: 'signupform',
        component: SignUpFormComponent
      },
      {
        path: '',
        redirectTo: '/landingpage',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})


export class AppModule { }
