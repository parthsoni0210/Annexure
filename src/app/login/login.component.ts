import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { MatFormField } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.pug",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  @ViewChild("email", { static: true }) email: ElementRef;
  @ViewChild("fname", { static: true }) fname: ElementRef;
  @ViewChild("lname", { static: true }) lname: ElementRef;
  @ViewChild("password", { static: true }) password: ElementRef;
  error:string="";
  constructor(public router: Router) {}

  ngOnInit() {
    if(localStorage.getItem("email")){
      this.router.navigate(['/dashboard']);
    }
  }

  onJoin() {
    if (
      this.email.nativeElement.value &&
      this.fname.nativeElement.value &&
      this.lname.nativeElement.value &&
      this.password.nativeElement.value
    ) {
      this.error="";
      localStorage.setItem("email", this.email.nativeElement.value);
      localStorage.setItem("userName", this.fname.nativeElement.value+' '+this.lname.nativeElement.value);
      this.router.navigate([""]);
    } else {
      this.error="All fields are mandatory";
      this.ngOnInit();
    }
  }
}
