import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NotifierService} from "angular-notifier";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('signInForm') signInForm: ElementRef | any;
  accInfor: any;
  private readonly notifier: NotifierService;

  constructor(notifierService: NotifierService, private routers: Router) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    // here we can use socket events and listeners using socketService
  }

  onSubmit($event: any) {
    if (this.validInfoLogin($event)) {
      this.notifier.notify('success', 'login successful!');
      localStorage.setItem("account_infor", JSON.stringify(this.accInfor));
      this.routers.navigate(['./article']);
    }
  }

  validInfoLogin($event: any) {
    this.accInfor = {
      username: $event.form.value.username,
      pwd: $event.form.value.pwd,
      remember: $event.form.value.remember
    }
    /**
     * show a notification
     * @param {string}  type Notification type
     * @param {string} message Notification message
     */
    if (!this.accInfor.pwd || !this.accInfor.username) {
      this.notifier.notify('warning', 'Input data username or password, please!');
      return false;
    }

    if (this.accInfor.username !== "duongdt.developer@gmail.com") {
      this.notifier.notify('error','username wrong, please again!');
      return false;
    }

    if (this.accInfor.pwd !== '123456') {
      this.notifier.notify('error', 'pwd wrong,please again!');
      return false;
    }
    return true;
  }

}

