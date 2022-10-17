import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="app-loading"></div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-admin-project';
}
