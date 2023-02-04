import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShowLoadingService {
  private showLoading = new Subject<any>();

  constructor() { }

  getShowLoading() {
    return this.showLoading.asObservable();
  }

  setShowLoading(val: any) {
    this.showLoading.next(val);
  }


}
