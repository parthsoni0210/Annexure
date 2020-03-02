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
import { AddUserComponent } from '../add-user/add-user.component';
import { UserDetailsComponent } from '../user-details/user-details.component';


@NgModule({
   declarations: [
      LoginComponent,
      AccountSetUpComponent,
      DashboardComponent,
      AccountVerficationComponent,
      BackendAccountVerificationComponent,
      AddUserComponent,
      UserDetailsComponent
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
