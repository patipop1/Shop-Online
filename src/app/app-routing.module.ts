import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LiffLinkComponent } from './line/liff-link/liff-link.component';
import { RichmenuComponent } from './line/richmenu/richmenu.component';
import { BuyComponent } from './customer/buy/buy.component';
import { PayComponent } from './customer/pay/pay.component';
import { CheckStatusComponent } from './customer/check-status/check-status.component';
import { PrinterComponent } from './admin/printer/printer.component';
import { SellInitComponent } from './admin/sell-init/sell-init.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'liffLink', component: LiffLinkComponent },
  { path: 'richmenu', component: RichmenuComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'pay', component: PayComponent },
  { path: 'check-status', component: CheckStatusComponent },
  { path: 'printer', component: PrinterComponent },
  { path: 'sellInit', component: SellInitComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
