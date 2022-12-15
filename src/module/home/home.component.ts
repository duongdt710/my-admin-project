import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {UserService} from "../_services/user/user.service";
import {ActivatedRoute} from "@angular/router";
import {Article} from "../../app/model/article";

declare var Tiff: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles$: Observable<any[]> | undefined;

  title = 'angular-image-viewer';

  constructor(private _api: UserService, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.articles$ = this._api.getArticles();
    this.loadingImage();
  }

  loadingImage() {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'arraybuffer';
    xhr.open('GET', '/assets/images/Bao_gia_VP_Hong_Dan.tif');
    xhr.onload = (e) => {
      const tiff = new Tiff({buffer: xhr.response});
      const canvas = tiff.toCanvas();
      canvas.style.scale = 1;
      // canvas.style.maxWidth = '200px';
      // canvas.style.maxHeight = '500px';
      const element = <HTMLCanvasElement>document.getElementById("tiff-viewer");
      element.append(canvas);
    }; xhr.send();
  }

}
