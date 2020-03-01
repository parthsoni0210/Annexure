import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountSetupComponent } from './account-setup/account-setup.component';


const routes: Routes = [
  { path: 'login', component:LoginComponent },
  { path: 'account-setup', component:AccountSetupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
