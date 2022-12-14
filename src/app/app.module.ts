import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginModule} from "../module/login/login.module";
import {AppComponent} from "./app.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {appRoutingModule} from "./app.routing";
import {AlertComponent} from "../module/alert/components/alert.component";
import {ReactiveFormsModule} from "@angular/forms";
import {JwtInterceptor} from "./helpers/jwt.interceptor";
import {ErrorInterceptor} from "./helpers/error.interceptor";
import {AlertModule} from "../module/alert/alert.module";
import {AngularNotificationModule} from "angular-notification-alert";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {ArticleModule} from "../module/article/article.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    ReactiveFormsModule,
    ArticleModule,
    AppRoutingModule, // appRoutingModule được tạo tự động bằng CLI
    HttpClientModule,
    AlertModule,
    BrowserAnimationsModule,
    AngularNotificationModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule
  ],
  exports: [],
  providers: [
    AppComponent,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
