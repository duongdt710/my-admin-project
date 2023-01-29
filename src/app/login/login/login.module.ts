import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {LoginComponent} from "../login.component";
import {LoginRoutingModule} from "../login-routing/login-routing.module";
import {FormsModule} from "@angular/forms";
import {NotifierModule} from "angular-notifier";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    LoginRoutingModule,
    FormsModule,
    NotifierModule
  ]
})
export class LoginModule {
}
