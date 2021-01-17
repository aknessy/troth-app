import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /**
   * Store login response
   */
  results : any;

  /**
   * 
   * @param http 
   */
  constructor(
    private http : HttpClient,
    private router : Router
  ) { }

  /**
   * Attempts to login the user with the supplied credentials
   * @param credentials
   * @return boolean
   **/
  login(credentials){
     
       return this.http.post('http://127.0.0.1:8000/api/auth/login', credentials)
         .pipe(
           map((response) => {
             if(response){
               let result = JSON.stringify(response)
               localStorage.setItem('loggedInUser', result);

               return true;
             }

             return false;
           }
        )
      )
  }

  /**
   * Logs out the currently logged in user
   * @param accessToken : string
   * @return void
   */
  logout(accessToken : string){
    return this.http.get('127.0.0.1:8000/api/auth/logout', { headers : {'Authorization' : 'Bearer ' + accessToken}})
      .pipe(
        map ( response => {
          if (response)
            localStorage.removeItem('loggedInUser')
            this.router.navigate(['/auth'])
        })
      )
  }

  /**
   * Check if the current user is logged in
   * @param None
   * @return boolean
   */
  isLoggedin(){
    let loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
   
    if(loggedInUser){
      let expiresAt = (loggedInUser.expires_at ? loggedInUser.expires_at : undefined);
  
      if(expiresAt != undefined){
        let now = new Date();
        let expiry = new Date(expiresAt);
        now.setHours(0,0,0,0);
  
        if(expiry > now)
          return true
      }
    }
  
    return false;
  }

  /**
   * Get the current user's access token
   * @param None
   * @return string
   */
  accessToken(){
    return (JSON.parse(localStorage.getItem('loggedInUser')).access_token)
  }

  /**
   * Get the currently logged in user's usertype
   * @param None
   * @return string
   */
  userType(){
    return (
      JSON.parse(localStorage.getItem('loggedInUser')).user 
      ? JSON.parse(localStorage.getItem('loggedInUser')).user['usertype'] : 
      null);
  }

  /**
   * Current User
   * @param None
   * @return any
   */
  currentUser(){
    return (JSON.parse(localStorage.getItem('loggedInUser')).user 
    ? JSON.parse(localStorage.getItem('loggedInUser')).user
    : null);
  }

}
