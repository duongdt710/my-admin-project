import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../_services/authentication/authentication.service";
import {ActivatedRoute, Router, Routes} from "@angular/router";
import {AlertService} from "../../_services/alert/alert.service";
import {first} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  loading: boolean = false;
  submitted: boolean = false;
  returnUrl: string = '';


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
      username: ['', [Validators.required, Validators.pattern(/^[0-9]{6}[A-Za-z]$/)]],
      password: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.alertService.clear();

    if (this.loginForm.invalid) {
      if (this.loginForm.value.username != '012345A' || this.loginForm.value.password != '123456') {
        this.alertService.error('input wrong, please try again!')
      } else {
        void this.router.navigate(['/home'])
      }
      return
    };
    this.loading = true;
    // @ts-ignore
    // this.authenticationService.login(this.loginForm.value).pipe(first()).subscribe(response => {
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
