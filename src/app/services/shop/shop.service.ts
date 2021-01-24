import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  /**
   * 
   * @param http 
   */
  constructor(
    private http : HttpClient
  ) { }

  /**
   * Fetch all shops
   * @param accessToken : string
   * @return Observable
   */
  getShops(accessToken : string){
    return this.http.get('http://127.0.0.1:8000/api/shop', { headers : {'Authorization' : 'Bearer ' + accessToken}})
      .pipe(
        map( (response) => {
          return JSON.stringify(response)
        })
      )
  }

  /**
   * Fetch shop owner using the id of the shop provided
   * @param shopId : number
   * @param accessToken : string
   * @return Observable
   */
  getShopOwner(shopId : number, accessToken : string){
    return this.http.get('http://127.0.0.1:8000/shop/owner/' + shopId, { headers : { 'Authorization' : 'Bearer ' + accessToken}})
      .pipe(
        map((response) => {
          return JSON.stringify(response)
        } )
      )
  }

  /**
   * Deletes a shop. This action does not remove a shop entirely, it makes it invisible to
   * listings, searches and general front-end view. If you want the shop to be completely wiped out,
   * set the 'trash' parameter to true.
   * @param shopId : number,
   * @param accessToken : string
   * @return Observable
   */
  deleteShop(shopId : number, accessToken : string, trash : boolean = false){
      return this.http.post('http://127.0.0.1:8000/shop/delete/' + shopId, { shop : shopId, removeEntirely : trash}, { headers : {'Authorization' : 'Bearer ' + accessToken}})
        .pipe(
          map((response) => {
            console.log(response);
          })
        )
  }
}
