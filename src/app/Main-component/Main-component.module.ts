import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from '../login/login.component';
import { AccountSetUpComponent } from '../account-set-up/account-set-up.component';
import { MainRoutingModule } from './Main-component.routing';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AccountVerficationComponent } from '../Account-verfication/Account-verfication.component';
import { BackendAccountVerificationComponent } from '../backend-account-verification/backend-account-verification.component';


@NgModule({
   declarations: [
      LoginComponent,
      AccountSetUpComponent,
      DashboardComponent,
      AccountVerficationComponent,
      BackendAccountVerificationComponent
   ],
   imports: [
      MainRoutingModule
   ],
   exports: [],
   providers: [],
   bootstrap: [
      
   ]
})
export class MainComponentModule { }
