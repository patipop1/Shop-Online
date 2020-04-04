import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from './util.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'document';

  urlHavaParam = '';
  isShop = false;

  constructor(
    public router: Router,
    public util: UtilService
  ) {
    this.getUrl();

  }

  getUrl() {
    setTimeout(() => {
      console.log(this.util.router.url);
      try {
        this.urlHavaParam = (this.util.router.url).split('?')[1].split('=')[0];
        this.isShop = true;
        this.util.shopid = this.urlHavaParam;
      } catch (err) {
        this.urlHavaParam = 'notShop';
        console.log(err);
      }

    }, 1000);
    console.log(this.urlHavaParam);
  }

}
