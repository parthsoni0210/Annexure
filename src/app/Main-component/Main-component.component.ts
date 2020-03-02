import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-Main-component",
  templateUrl: "./Main-component.component.pug",
  styleUrls: ["./Main-component.component.css"]
})
export class MainComponentComponent implements OnInit {
  public isLogged:boolean = false;
  constructor(public router: Router) {
  }

  ngOnInit() {
    if (localStorage.getItem("email")) {
      this.isLogged = false;
      this.router.navigate(["/dashboard"]);
    } else {
      this.isLogged = true;
      this.router.navigate(["/login"]);
    }
  }
}
