import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.pug",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  userName: string;
  constructor(public router: Router) {
    this.userName = localStorage.getItem("userName");
  }

  ngOnInit() {}

  onLogout() {
    localStorage.removeItem("email");
    localStorage.removeItem("userName");
    this.router.navigate(["/"]);
  }
}
