import { Component, OnInit, HostListener } from '@angular/core';
import {Observable} from "rxjs";
import {Article} from "../../model/article";
import {ArticleService} from "../article.service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles$: Observable<Article[]>;
  myValue = "Hello Angular"
  constructor(private _api: ArticleService) { }

  ngOnInit(): void {
    this.articles$ = this._api.getArticles();
    console.log(this.articles$)
  }

}
