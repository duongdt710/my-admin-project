import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {UserService} from "../_services/user/user.service";
import {ActivatedRoute} from "@angular/router";
import {Article} from "../../app/model/article";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles$: Observable<any[]> | undefined;

  constructor(private _api: UserService, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.articles$ = this._api.getArticles();
  }

}
