import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
    this.dataService.logInUser(form.value)
    .subscribe(info => {
      console.log(info.url);
      let urlPath = info.url;
      let urlPathArray = urlPath.split('/');
      let lastSegment = urlPathArray[urlPathArray.length - 1];
      console.log(lastSegment);

      this.router.navigate([lastSegment]);
    });

  }

}
