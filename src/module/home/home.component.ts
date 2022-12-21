import {Component, EventEmitter, OnInit, AfterViewInit, Output} from '@angular/core';
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
  files: any;
  title = 'angular-image-viewer';

  constructor(private _api: UserService, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.articles$ = this._api.getArticles();
    // this.loadingImage().then();
  }

  async loadingImage() {

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'arraybuffer';
    xhr.open('GET', 'https://bvofficeuat.baoviet.com.vn/api/doc/file/get-file-pdf?photo_path=/data/OfficeFile/file-path/2022/12/16/1671181979_019870.tif');
    xhr.onload = (e) => {
      const tiff = new Tiff({buffer: xhr.response});
      const canvas = tiff.toCanvas();
      // canvas.style.scale = 1;
      canvas.style.maxWidth = '400px';
      canvas.style.maxHeight = '800px';
      const element = <HTMLCanvasElement>document.getElementById("tiff-viewer");
      element.append(canvas);
    }; xhr.send();

      // await PSPDFKit.load({
      //     container: '#tiff-viewer',
      //     document: "https://bvofficeuat.baoviet.com.vn/api/doc/file/get-file-pdf?photo_path=/data/OfficeFile/file-path/2022/12/16/1671181979_019870.tif",
      //     toolbarItems: PSPDFKit.defaultToolbarItems.filter(item => item.type != "print"),
      //     initialViewState: new PSPDFKit.ViewState({
      //       sidebarMode: PSPDFKit.SidebarMode.THUMBNAILS
      //     })
      // })


    // @ts-ignore
    // await PSPDFKit.load({
    //   container: '#tiff-viewer',
    //   document: "https://bvofficeuat.baoviet.com.vn/api/doc/file/get-file-pdf?photo_path=/data/OfficeFile/file-path/2022/12/16/1671181979_019870.tif",
    //   toolbarItems: PSPDFKit.defaultToolbarItems.filter(item => item.type != "print"),
    //   initialViewState: new PSPDFKit.ViewState({
    //     sidebarMode: PSPDFKit.SidebarMode.THUMBNAILS
    //   })
    // });
    // const pageWidth = instance.pageInfoForIndex(0)?.width;
    // const pageHeight = instance.pageInfoForIndex(0)?.height;
    //
    // const width = 400;
    // // @ts-ignore
    // const height = Math.round((width * pageHeight) / pageWidth);
    //
    // // Renders the first page (page index 0).
    // const buffer = await instance.renderPageAsArrayBuffer({ width: width }, 0);
    //
    // const canvas = <HTMLCanvasElement>document.createElement("canvas");
    // canvas.width = width;
    // canvas.height = height;
    //
    // const imageView = new Uint8Array(buffer);
    // const ctx = canvas.getContext("2d");
    // // @ts-ignore
    // const imageData = ctx.createImageData(width, height);
    // imageData.data.set(imageView);
    // // @ts-ignore
    // ctx.putImageData(imageData, 0, 0);
    // const element = <HTMLCanvasElement>document.getElementById('tiff-viewer');
    // element.appendChild(canvas)
    // document.body.appendChild(canvas);

    // const tiff = await fromUrl('https://bvofficeuat.baoviet.com.vn/api/doc/file/get-file-pdf?photo_path=/data/OfficeFile/file-path/2022/12/16/1671181979_019870.tif');
    // const image = await tiff.getImage();
    // const data = await image.readRasters();
    //
    // const canvas = document.getElementById("plot");
    // const plot = new plotty.plot({
    //   canvas, data: data[0], width: image.getWidth(), height: image.getHeight(), domain: [0, 256], colorScale: "viridis"
    // });
    // plot.render();
    // var options = {
    //   logLevel: 1
    // };
    //
    // var converter = new ConvertTiff(options);
    // var location = path.dirname('/srv/www/mysite/public/documents');
    //
    // converter.convertOne('/assets/images/Bao_gia_VP_Hong_Dan.tif', location);
  }

}
