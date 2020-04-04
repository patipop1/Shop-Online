import { environment } from './../../../environments/environment';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilService } from './../../util.service';


@Component({
  selector: 'app-liff-link',
  templateUrl: './liff-link.component.html',
  styleUrls: ['./liff-link.component.css']
})
export class LiffLinkComponent implements OnInit, OnDestroy {

  subscription: any;

  shopDetail: any = {};
  shopId = '';
  url = '';

  constructor(
    public util: UtilService
  ) {
  }

  ngOnInit(): void {

    setTimeout(() => {
      if (this.util.shopid === '') {
        this.util.router
          .navigate(['/']);

      }
    }, 2000);


    this.getShop();
    // this.getParameter();
    // this.loadShopName();
  }

  ngOnDestroy(): void {
  }

  getShop() {
    this.url = environment.url;
    try {
      console.log(this.util.router.url);
      const data = (this.util.router.url).split('?')[1].split('=')[0];
      console.log(this.util.router.url);
      // console.log(data);
      if (data !== null) {
        console.log(data);
        this.shopId = data;
        // console.log(this.shopId);
        this.util.db.database.ref(`shop/info/${this.shopId}/name`).once('value').then(res => {
          this.shopDetail[this.shopId] = res;
        });
      }

    } catch (err) {
      console.log(err);
    }


  }

  showImage(src) {

  }



}
