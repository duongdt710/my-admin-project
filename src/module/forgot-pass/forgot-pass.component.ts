import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    protected router: Router
  ) { }

  ngOnInit(): void {
  }

  routerBack() {
    this.router.navigate(['./login'])
  }

}
