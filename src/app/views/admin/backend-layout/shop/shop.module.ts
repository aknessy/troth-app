
import { ShopListComponent } from './shop-list/shop-list.component';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { SearchFilterPipe } from 'src/app/shared/pipes/filter.pipe';
import { TextEllipsisPipe } from 'src/app/shared/pipes/text-ellipsis.pipe';
import { EditShopComponent } from './edit-shop/edit-shop.component';

@NgModule({
  declarations: [
    ShopListComponent,
    SearchFilterPipe,
    TextEllipsisPipe,
    EditShopComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatBadgeModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
