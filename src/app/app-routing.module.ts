import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AccountSetUpComponent } from './account-set-up/account-set-up.component';


const routes: Routes = [
  { path: 'login', component:LoginComponent },
  {path:'header',component:HeaderComponent},
  {path:'AccountSetUp',component:AccountSetUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
