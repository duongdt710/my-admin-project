import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginModule} from "../module/login/login.module";
import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {routing} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    HttpClientModule,
    routing
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
