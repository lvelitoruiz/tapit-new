import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { WalletComponent } from './wallet.component';
import { PromosComponent } from './promos/promos.component';
import { CuponsComponent } from './cupons/cupons.component';
import { ShopPointsComponent } from './shop-points/shop-points.component';
import { PromoCardComponent } from './promos/promo-card/promo-card.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ModalComponent } from './modal/modal.component';
import { ShopCardComponent } from './shop-points/shop-card/shop-card.component';

const routes: Routes = [
  {
    path: '',
    component: WalletComponent,
    children: [
      {
        path: 'shop',
        component: ShopPointsComponent
      },
      {
        path: 'promos',
        component: PromosComponent
      },
      {
        path: 'coupons',
        component: CuponsComponent
      },
      { path: '', redirectTo: 'promos', pathMatch: 'full' },
      { path: '**', redirectTo: 'promos', pathMatch: 'full' }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
@NgModule({
  declarations: [WalletComponent, PromosComponent, CuponsComponent, ShopPointsComponent, PromoCardComponent, ModalWindowComponent,ShopCardComponent, ModalComponent],
  imports: [
    CommonModule, InfiniteScrollModule, RouterModule.forChild(routes)
  ]
})
export class WalletModule { }
