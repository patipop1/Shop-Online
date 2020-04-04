import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule, FunctionsRegionToken } from '@angular/fire/functions';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { NgxSmartModalModule } from 'ngx-smart-modal';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LiffLinkComponent } from './line/liff-link/liff-link.component';
import { RichmenuComponent } from './line/richmenu/richmenu.component';
import { BuyComponent } from './customer/buy/buy.component';
import { PayComponent } from './customer/pay/pay.component';
import { CheckStatusComponent } from './customer/check-status/check-status.component';
import { PrinterComponent } from './admin/printer/printer.component';
import { SellInitComponent } from './admin/sell-init/sell-init.component';

@NgModule({
  declarations: [
    AppComponent,
    LiffLinkComponent,
    HomeComponent,
    RichmenuComponent,
    BuyComponent,
    PayComponent,
    CheckStatusComponent,
    PrinterComponent,
    SellInitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireFunctionsModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
