import { Router } from '@angular/router';
import { AuthService } from './../../../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ShopService } from 'src/app/services/shop/shop.service';

@Component({
  selector: 'shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit {
  /**
   * Page title
   * @var string
   */
  pageTitle = '3roth App | Shops List'

   /**
   * Search Query String
   * @var string
   */
  queryString : string

  /**
   * Current user's access token
   * @var string
   */
  accessToken : string

  /**
   * Current user's type
   * @var string
   */
  userType : string

  /**
   * Store the store list retrieved via the api endpoint
   * @var any
   */
  shopList : any;

  /**
   * Module loading
   * @var boolean
   */
  moduleLoading : boolean;

  /** */
  constructor(
    private title : Title,
    private shopService : ShopService,
    private authService : AuthService,
    private router : Router
  ){
    this.title.setTitle(this.pageTitle);
    this.accessToken = this.authService.accessToken();
    this.userType = this.authService.userType();

    this.moduleLoading = true;

    if(this.userType !== 'admin')
      this.router.navigate(['admin/dashboard']);
   }

  ngOnInit(): void {
    this.shopService.getShops(this.accessToken)
      .subscribe((result) => {
        if(result){
          this.shopList = JSON.parse(result);
          this.moduleLoading = false;
        }
      })
  }

  deleteShop(shopId){

  }

  deactivateShop(shopId){

  }

}
