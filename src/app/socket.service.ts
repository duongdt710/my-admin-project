import { Injectable } from '@angular/core';
import {io} from 'socket.io-client';
import {environment} from "../environments/environment";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any;
  private contentList = new Subject<string>();
  constructor() {
  }

  public getMessage(): Observable<string> {
    return this.contentList.asObservable();
  }

  public updateMessage(message: string): void {
    this.contentList.next(message);
  }

  setupSocketConnection(textContent: string) {
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket.emit('my message', textContent); // send event to server
    this.socket.on('my broadcast', (message: string) => { // get event from server
      this.contentList.next(message);
      this.disconnect();
    })
  }

  disconnect() {
    // if (this.socket) {
      this.socket.disconnect();
    // }
  }

}
