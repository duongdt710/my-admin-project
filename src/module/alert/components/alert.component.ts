import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  message: any;
  private subscription: Subscription | unknown | undefined;

  constructor(
  ) {}


  ngOnInit(): void {
    // this.subscription =
  }

  ngOnDestroy() {
    // @ts-ignore
    this.subscription.unsubscribe();
  }

}
