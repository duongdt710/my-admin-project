import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {AdminArticleListComponent} from "./admin-article-list/admin-article-list.component";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminArticleListComponent
      }
    ]
  }
]

@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
