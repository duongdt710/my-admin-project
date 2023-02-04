import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from "rxjs";
import {ShowLoadingService} from "./show-loading.service";

@Component({
  selector: 'app-show-loading',
  templateUrl: './show-loading.component.html',
  styleUrls: ['./show-loading.component.scss']
})
export class ShowLoadingComponent implements OnInit, OnDestroy {
  showLoading: boolean = false;
  subcription: any = Subscription;

  constructor(private showLoadingService: ShowLoadingService) { }

  ngOnInit(): void {
    this.subcription = this.showLoadingService.getShowLoading().subscribe(res => {
      this.showLoading = res;
    })
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

}
