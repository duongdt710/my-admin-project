import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticleListComponent} from "./article-list/article-list.component";
import {ArticleRoutingModule} from "./article-routing.module";
import {ArticleComponent} from "./article.component";
import {ArticleDetailComponent} from "./article-detail/article-detail.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ArticleComponent, ArticleListComponent, ArticleDetailComponent],
    imports: [
        CommonModule, ArticleRoutingModule, FormsModule
    ]
})
export class ArticleModule { }
