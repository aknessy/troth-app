import { RouterModule } from '@angular/router';
import { ShopListComponent } from './shop-list/shop-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditShopComponent } from './edit-shop/edit-shop.component';

const childRoutes = [
  {
    path : '',
    component : ShopListComponent
  },
  {
    path : 'shops-list',
    component : ShopListComponent
  },
  {
    path : 'edit-shop/:shopId',
    component : EditShopComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShopRoutingModule { }
