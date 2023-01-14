import { Component, OnInit } from '@angular/core';
import {SocketService} from "../socket.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  socketIO: Subscription;

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    // here we can use socket events and listeners using socketService
    this.connectWebsocket();
  }

  connectWebsocket() {
    this.socketIO = this.socketService.checkToken().subscribe((message: any) => {
      const data: any = message;
      console.log(data);
    })
  }

}
