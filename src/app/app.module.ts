import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatInputModule,MatFormFieldModule,MatSliderModule ,MatOptionModule, MatSelectModule, MatIconModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,MatFormFieldModule,
    MatInputModule,FormsModule,
    ReactiveFormsModule,MatSliderModule 
  ],
  exports:[ ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
