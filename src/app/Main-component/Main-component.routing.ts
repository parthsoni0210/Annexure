import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AccountSetUpComponent } from '../account-set-up/account-set-up.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AccountVerficationComponent } from '../Account-verfication/Account-verfication.component';
import { BackendAccountVerificationComponent } from '../backend-account-verification/backend-account-verification.component';

const routes: Routes = [
  { path: '', component:LoginComponent },
  { path: 'login', component:LoginComponent },
  { path: 'dashboard', component:DashboardComponent },
  {path:'AccountSetUp',component:AccountSetUpComponent},
  {path:'AccountVerfication',component:AccountVerficationComponent},
  {path:'BackendAccountVerfication',component:BackendAccountVerificationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
