import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginModule} from "../module/login/login.module";
import {AppComponent} from "./app.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {appRoutingModule} from "./app.routing";
import {HomeComponent} from "../module/home/home.component";
import {RegisterComponent} from "../module/register/register.component";
import {AlertComponent} from "../module/alert/components/alert.component";
import {ReactiveFormsModule} from "@angular/forms";
import {JwtInterceptor} from "./helpers/jwt.interceptor";
import {ErrorInterceptor} from "./helpers/error.interceptor";
import {AlertModule} from "../module/alert/alert.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule,
    BrowserAnimationsModule
  ],
  providers: [
    AppComponent,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
