import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AdminRoutingModule} from "./admin-routing.module";
import {AdminComponent} from "./admin.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AdminArticleListComponent} from "./admin-article-list/admin-article-list.component";


@NgModule({
  declarations: [AdminComponent, AdminArticleListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
