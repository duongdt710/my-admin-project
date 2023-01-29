import {Component, OnDestroy, OnInit, OnChanges} from '@angular/core';
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
<!--  <div style="text-align: center; margin-top: 20px">-->
<!--    <input type="text" placeholder="Nhập text message" [ngModel]="messageSocket" (change)="onChange($event)">-->
<!--    <button (click)="onHandleRequest()">Send</button>-->
<!--    <button (click)="onClearRequest()">clear</button>-->
<!--  </div>-->

<!--  <div *ngIf="messageList.length > 0" style="text-align: center; margin-top: 20px">-->
<!--    <ul>-->
<!--      <li *ngFor="let i of messageList">{{i}}</li>-->
<!--    </ul>-->
<!--  </div>-->
  <notifier-container></notifier-container>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'socketio-angular';
  messageSocket: string = ''
  messageList = [];
  //@ts-ignore
  subscription: Subscription;

  constructor(private socketService: SocketService) {}

  ngOnInit() {
    // this.subscription = this.socketService.getMessage().subscribe((msg: any) => {
    //   //@ts-ignore
    //   this.messageList.push(msg);
    //   localStorage.setItem('socket_data', msg.toString());
    // }, null, () => {
    //   this.subscription.unsubscribe();
    // })
  }

  // onChange = ($event: any) => {
  //   console.log($event.target.value);
  //   if ($event.target.value) {
  //     this.socketService.setupSocketConnection($event.target.value);
  //   }
  // }

  // onHandleRequest() {
  //   // @ts-ignore
  //   this.socketService.setupSocketConnection(this.messageSocket);
  // }

  // ngOnDestroy() {
  //   this.socketService.disconnect();
  // }
}
//
// interface ServerResponse {
//   prods: any[];
//   type?: string;
// }
