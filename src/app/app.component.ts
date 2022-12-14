import { Component } from '@angular/core';
import {User} from "../module/_services";
import {Router} from "@angular/router";
import {AuthenticationService} from "../module/_services/authentication/authentication.service";

@Component({
  selector: 'app-root',
  template: `
<!--    &lt;!&ndash; nav &ndash;&gt;-->
<!--    <nav class="navbar navbar-expand navbar-dark bg-dark" *ngIf="currentUser">-->
<!--      <div class="navbar-nav">-->
<!--        <a class="nav-item nav-link" routerLink="/">Home</a>-->
<!--        <a class="nav-item nav-link" (click)="logout()">Logout</a>-->
<!--      </div>-->
<!--    </nav>-->

<!--    &lt;!&ndash; main app container &ndash;&gt;-->
<!--    <div class="jumbotron">-->
<!--      <div class="container">-->
<!--        <div class="row">-->
<!--          <div>-->
<!--            <app-alert></app-alert>-->
<!--            <router-outlet></router-outlet>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  <ul class="nav nav-pills card-header-pills">
    <li class="nav-item">
      <a class="nav-link" routerLink="/">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="detail">Detail</a>
    </li>
  </ul>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-admin-project';
  currentUser: User | unknown;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    void this.router.navigate(['./login']);
  }
}
