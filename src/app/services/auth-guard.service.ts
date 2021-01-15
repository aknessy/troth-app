import { Injectable } from '@angular/core';
import {  
  Router,
  CanActivate,
  RouterStateSnapshot ,
  ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router : Router,
    private authService : AuthService
  ) { }

  canActivate(route, state){
    console.log(this.authService.isLoggedin());return false
    if(this.authService.isLoggedin())
      return true;
    
    this.router.navigate(['/auth'], { queryParams : {returnUrl : state.url}});

    return false;
  }
}
