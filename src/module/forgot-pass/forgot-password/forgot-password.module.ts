import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForgotPassComponent} from "../forgot-pass.component";
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ForgotPassComponent
  ],
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterOutlet,
    RouterModule
  ]
})
export class ForgotPasswordModule { }
