import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "../login.component";
import {RouterModule, Routes} from "@angular/router";
import {GuardGuard} from "../../guard/guard.guard";

const routes: Routes = [
  {
    path: 'logout',
    component: LoginComponent,
    canActivate: [GuardGuard]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
