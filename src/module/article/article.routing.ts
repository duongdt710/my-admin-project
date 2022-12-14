import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "../home/home.component";
import {RegisterComponent} from "../register/register.component";

const routes: Routes = [
  {
    path: 'article',
    component: RegisterComponent
  },
  {
    path: 'article/:slug',
    component: HomeComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [HomeComponent, RegisterComponent]
})

export class ArticleModule {}
