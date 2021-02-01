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
   * Fetch the shop information for the shop with the given shopId.
   * @param shopId : number
   * @param accessToken : string
   * @returns Observable
   */
  getSingle(shopId : number, accessToken : string){
    return this.http.get('http://127.0.0.1:8000/api/shop/' + shopId, { headers : {'Authorization' : 'Bearer ' + accessToken}})
      .pipe(
        map((response) => {
          return JSON.stringify(response)
        })
      )
  }

  /**
   * Fetch shop owner using the id of the user provided.
   * @param shopId : number
   * @param accessToken : string
   * @return Observable
   */
  getShopOwner(userId : number, accessToken : string){
    return this.http.get('http://127.0.0.1:8000/api/shop/owner/' + userId, { headers : { 'Authorization' : 'Bearer ' + accessToken}})
      .pipe(
        map((response) => {
          return JSON.stringify(response)
        } )
      )
  }

  /**
   * Get all the products for the shop with the given shopId
   * @param shopId : number
   * @param accessToken : string
   * @return Observable
   */
  getShopProducts(shopId : number, accessToken : string){
    return this.http.get('http://127.0.0.1:8000/api/shop/' + shopId + '/products', { headers : { 'Authorization' : 'Bearer ' + accessToken}})
    .pipe(
      map((response) => {
        return JSON.stringify(response);
      })
    )
  }

  /**
   * Fetch the States and Cities stored in the DB via the api endpoint.
   * @param countryCode : string
   * @param accessToken : string
   * @returns Observable
   */
  getStatesOrigin(countryCode : string, accessToken : string){
    return this.http.get('http://127.0.0.1:8000/api/country/' + countryCode, { headers : {'Authorization' : 'Bearer ' + accessToken}})
    .pipe(
      map((response) => {
        return JSON.stringify(response);
      })
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
      return this.http.post('http://127.0.0.1:8000/api/shop/delete/' + shopId, { shop : shopId, removeEntirely : trash}, { headers : {'Authorization' : 'Bearer ' + accessToken}})
        .pipe(
          map((response) => {
            console.log(response);
          })
        )
  }

}
