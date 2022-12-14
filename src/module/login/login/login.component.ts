import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../_services/authentication/authentication.service";
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {AlertService} from "../../_services/alert/alert.service";
import {BehaviorSubject, first} from "rxjs";
import {User} from "../../_services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm: any = FormGroup;
  loading: boolean = false;
  submitted: boolean = false;
  returnUrl: string = '';
  @ViewChild('autoFocus') autoFocus: ElementRef<any> | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/'])
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      // Validators.pattern(/^[0-9]{6}[A-Za-z]$/)]
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  ngAfterViewInit() {
    setTimeout(() => {
      //@ts-ignore
        this.autoFocus.nativeElement.focus();
    }, 0)
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();
    this.loading = true;
    // if (this.loginForm.invalid) {
    if (this.loginForm.value) {
      if (this.loginForm.value.username != 'dothanhduonglbt.0710@gmail.com' || this.loginForm.value.password != '123456') {
        this.alertService.error('input wrong, please try again!')
      } else {
        void this.router.navigate(['/home']);
      }
    };

    setTimeout(() => {
      this.loading = false
      ;
    }, 2000)

    // @ts-ignore
    // this.authenticationService.login(this.loginForm.value).subscribe(response => {
    //   console.log(response)
    //   if (response.verified) {
    //     // void this.router.navigate(['/'])
    //   }
    //   else {
    //     // void this.router.navigate(['/auth/home']);
    //   }
    // }, error => {
    //   this.alertService.error(error);
    //   this.loading = false;
    // });

  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
