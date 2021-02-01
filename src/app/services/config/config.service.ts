import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  

  constructor(
    private http : HttpClient
  ) { }

  /**
   * Get the configuration parameters for the specified category
   * @param configCategroy : string
   * @param accessToken : string
   */
  getConfig(configCategory : string, accessToken : string){
    return this.http.get('http://127.0.0.1:8000/api/config/' + configCategory, { headers : {'Authorization' : 'Bearer ' + accessToken}})
      .pipe(
        map((response) => {
          return JSON.stringify(response)
        })
      )
  }
}
