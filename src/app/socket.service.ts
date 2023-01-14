import { Injectable } from '@angular/core';
import {Socket} from "ngx-socket-io";
//@ts-ignore
import * as Connection from "../../../nodejs-my-admin-project/src/index";
import {Observable} from "rxjs";
import * as socketIo from 'socket.io-client'
import {environment} from "../environments/environment";
const backendUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private url = environment.SOCKET_URL;
  private socket: any;


  // private clientSocket: SocketIOClient.Socket;
  constructor() {
    this.socket = new WebSocket(this.url);
  }

  checkToken() {
    let observable = new Observable(observer => {
      this.socket.message = function (event: any) {
        const data = JSON.parse(event.data.toString());
        console.log(data);
      }
    })
    return observable;
  }
}
