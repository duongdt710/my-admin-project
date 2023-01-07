import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  template: `
    <h3>Article Parent</h3>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
