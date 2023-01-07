import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {ArticleComponent} from "./article.component";
import {ArticleListComponent} from "./article-list/article-list.component";
import {ArticleDetailComponent} from "./article-detail/article-detail.component";

const routes: Routes = [
  {
    path: 'article',
    component: ArticleComponent,
    children: [
      {
        path: '',
        component: ArticleListComponent
      },
      {
        path: ':slug',
        component: ArticleDetailComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
