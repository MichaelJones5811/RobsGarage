import {Injectable} from "@angular/core";
import { DataService } from "./data.service";

@Injectable()

export class AuthService {
  constructor(private dataService: DataService) {}
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
    this.dataService.getUserInfo()
    .subscribe(
      (req) => {
        if (req._id) {
          console.log("Did see ID");
          this.loggedIn = true;
          resolve(this.loggedIn);
        } else {
          console.log("Did not see ID");
          this.loggedIn = false;
          resolve(this.loggedIn);
        }
      },
      (error) => console.log(error)
      );
  });
  return promise;
}

isAdmin() {
  const promise = new Promise(
    (resolve, reject) => {
  this.dataService.getUserInfo()
  .subscribe(
    (req) => {
      console.log("Req is: ", req);
      if (req.local.role === "Admin") {
        console.log("Is Admin");
        this.loggedIn = true;
        resolve(this.loggedIn);
      } else {
        console.log("Is not Admin");
        this.loggedIn = false;
        resolve(this.loggedIn);
      }
    },
    (error) => console.log(error)
    );
});
return promise;
}

userCheck() {
  const promise = new Promise(
    (resolve, reject) => {
  this.dataService.usersCheck()
  .subscribe(
    (req) => {
      console.log("Req is: ", req);
      if (req.successMsg === "yes") {
        console.log("Access Allowed");
        this.loggedIn = true;
        resolve(this.loggedIn);
      } else {
        console.log("Rejected");
        this.loggedIn = false;
        resolve(this.loggedIn);
      }
    },
    (error) => console.log(error)
    );
});
return promise;
}

  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
