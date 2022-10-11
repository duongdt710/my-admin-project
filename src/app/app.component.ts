import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="app-loading"></div>
    <app-login></app-login>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-admin-project';
}
