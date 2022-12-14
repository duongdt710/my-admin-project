import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Article} from "../../app/model/article";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../_services/user/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  article$: Observable<any> | undefined;
  constructor(private _route: ActivatedRoute, private _api: UserService) { }

  ngOnInit(): void {
    let slug = this._route.snapshot.paramMap.get('slug');
    this.article$ = this._api.getArticleBySlug(slug);
  }

}
