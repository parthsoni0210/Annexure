import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AccountSetUpComponent } from '../account-set-up/account-set-up.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AccountVerficationComponent } from '../Account-verfication/Account-verfication.component';
import { BackendAccountVerificationComponent } from '../backend-account-verification/backend-account-verification.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { UserDetailsComponent } from '../user-details/user-details.component';

const routes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'login', component:LoginComponent },
  { path: 'dashboard', component:DashboardComponent },
  {path:'AccountSetUp',component:AccountSetUpComponent},
  {path:'AccountVerfication',component:AccountVerficationComponent},
  {path:'BackendAccountVerfication',component:BackendAccountVerificationComponent},
  {path:'userManagement',component:AddUserComponent},
  {path:'userDetails',component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
