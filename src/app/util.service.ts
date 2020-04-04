// import { AngularFireFunctions } from '@angular/fire/functions';
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Injectable({
  providedIn: 'root'
})

export class UtilService {
  constructor(
    public db: AngularFireDatabase,
    public router: Router,
    public afStorage: AngularFireStorage,
    public smartModal: NgxSmartModalService
    // public fns: AngularFireFunctions,


  ) {

  }

  // Firebase
  firebaseFn: AngularFireFunctions;
  firebaseDb: AngularFireDatabase;

  link: any = {};
  shopid = '';
  imageFullScreen = '';

  objectKey = Object.keys;

  openViewImage(src) {
    this.imageFullScreen = src;
    this.smartModal.getModal('showImageModal').open();
  }


}
