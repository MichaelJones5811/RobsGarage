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

  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
