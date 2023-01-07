import { Component } from '@angular/core';
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
  <ul class="nav nav-pills card-header-pills">
    <li class="nav-item">
      <a class="nav-link" routerLink="/" >Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" routerLink="/admin">Admin</a>
    </li>
  </ul>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}
}
