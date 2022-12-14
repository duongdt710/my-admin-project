import {Component, OnInit, OnDestroy, OnChanges, SimpleChanges} from '@angular/core';
import {Subscription} from "rxjs";
import {AlertService} from "../../_services/alert/alert.service";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy, OnChanges {
  private subscription: Subscription | unknown | undefined;
  message: any;

  constructor(
    private alertService: AlertService
  ) {}


  ngOnInit(): void {
    this.subscription = this.alertService.getAlear().subscribe(message => {
      switch (message && message.type) {
        case 'success':
          message.cssClass = 'alert alert-success';
          break;
        case 'error':
          message.cssClass = 'alert alert-danger';
          break;
      }

      this.message = message;
      if (this.message) {
        setTimeout(() => {
          this.message = !this.message;
        }, 3000)
      }
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
  }

  ngOnDestroy() {
    // @ts-ignore
    this.subscription.unsubscribe();
  }

}
