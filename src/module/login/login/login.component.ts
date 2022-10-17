import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../_services/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup;
  progress: boolean = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private authentication: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(/^[0-9]{6}[A-Za-z]$/)]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.progress = true;
    // @ts-ignore
    this.authentication.login(this.loginForm.value).subscribe(response => {
      if (response.verified) {
       void this.router.navigate(['/'])
      } else {
       void this.router.navigate(['/auth/verification']);
      }
    }, error => {
      this.error = error;
    }).add(
      () => this.progress = false
    )
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
