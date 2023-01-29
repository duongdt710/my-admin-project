import {Component, OnInit, HostListener, OnDestroy, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Article} from "../../model/article";
import {ArticleService} from "../article.service";
import {SocketService} from "../../socket.service";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit, OnDestroy, AfterViewInit {
  //@ts-ignore
  articles$: Observable<Article[]>;
  myValue = "Hello Angular"
  messageSocket: string = ''
  messageList = [];
  //@ts-ignore
  private subscription: Subscription;
  //@ts-ignore
  @ViewChild('focus_input') focus_input: ElementRef;
  arr_list_message: any = [
    {id: '1_send', text: ''}
  ]

  constructor(private _api: ArticleService, private socketService: SocketService) { }

  ngOnInit(): void {
    this.articles$ = this._api.getArticles();
    this.subscription = this.socketService.getMessage().subscribe((msg: any) => {
      const message_receiver = {
        id: this.arr_list_message.filter((p: any) => p.id.indexOf('_receiver') != -1).length + 1 + '_receiver',
        text: msg.replace("server_nodeJs: ", "hello ")
      }
      const message_send = {
        id: this.arr_list_message.filter((p: any) => p.id.indexOf('_send') != -1).length + 1 + '_send',
        text: ''
      }
      //@ts-ignore
      this.arr_list_message.push(message_receiver);
      this.arr_list_message.push(message_send);
      setTimeout(() => {
        // @ts-ignore
        document.getElementById(message_send.id).focus();
      },  0)

      console.log(this.arr_list_message);
    })
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.focus_input.nativeElement.focus();
    }, 0)
  }

  ngOnDestroy() {
    this.socketService.disconnect();
  }

  onHandleMessage(item: any) {
    if (item.id.indexOf('_send') != -1) {
      return 'realtime-socket-body-message-send'
    } else {
      return 'realtime-socket-body-message-receiver'
    }
  }

  onHandleRequest() {
    // @ts-ignore
    this.socketService.setupSocketConnection(this.messageSocket);
    this.messageSocket = '';
    // @ts-ignore
    // this.contentList.push(this.messageSocket);
    // this.messageSocket = ''
  }

  // onClearRequest() {
  //   this.socketService.setupSocketConnection('clear');
  //
  // }

  onHandleSend($event: any) {
    console.log($event.target.value);
    //@ts-ignore
    this.socketService.setupSocketConnection($event.target.value);
  }

  id: any = null;
  pos = 20;
  element: any;
  width_element: string | number = 20;
  height_element: string | number = 20;
  top_element: string | number =180;
  left_element: string | number = 180;



}
