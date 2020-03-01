import { Component, OnInit } from '@angular/core';
import {MatFormField} from '@angular/material'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.pug',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }


  onJoin(){
    this.router.navigate(['/account-setup']);
  }

}
