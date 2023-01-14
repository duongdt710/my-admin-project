import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router, Routes} from "@angular/router";
import {SocketService} from "./socket.service";
import {Subscription} from "rxjs";

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
    <li class="nav-item">
      <a class="nav-link" routerLink="/logout">Logout</a>
    </li>
  </ul>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  localData: any[] = [];

  constructor(private socketService: SocketService) {}

  ngOnInit() {
    // this.subs.push(
    //   // @ts-ignore
    //   this.socketService.getInitialData().subscribe((data: ServerResponse) => {
    //     this.localData = data.prods;
    //   })
    // );
    //
    // this.subs.push(
    //   // @ts-ignore
    //   this.socketService.getUpdatedData().subscribe((data: ServerResponse) => {
    //     this.localData = data.prods;
    //   })
    // )

  }

  ngOnDestroy() {
    // this.subs.forEach(s => s.unsubscribe());
  }
}

interface ServerResponse {
  prods: any[];
  type?: string;
}
