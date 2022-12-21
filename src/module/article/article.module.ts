import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {RegisterComponent} from "../register/register.component";

const routers: Routes = [
  {
    path: 'article',
    component: HomeComponent
  },
  {
    path: 'article/:slug',
    component: RegisterComponent
  }
]

@NgModule({
  declarations: [HomeComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routers)
  ]
})
export class ArticleModule { }
