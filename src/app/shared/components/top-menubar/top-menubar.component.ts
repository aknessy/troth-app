import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { faAlignJustify, faEnvelopeSquare, faUser, faCogs, faBell, faDoorOpen } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'top-menubar',
  templateUrl: './top-menubar.component.html',
  styleUrls: ['./top-menubar.component.scss']
})
export class TopMenubarComponent implements OnInit {
/**
   * Font awesome lock open icon
   */
	justifyIcon = faAlignJustify;
	
	/**
	 * Font awesome envelope icon
	**/
	envelopeIcon = faEnvelopeSquare;

	/**
	 * Font awesome user icon
	 */
	userIcon = faUser;

	/**
	 * Font awesome Settings Icons
	 */
	settingsIcon = faCogs;

	/**
	 * Font awesome bell icon
	 */
  bellIcon = faBell;

  /**
   * Logout Icon
   */
  logoutIcon = faDoorOpen;

  /**
   * Current user's access token
   * @var string
   */
  accessToken : string;
  
  /**
   * 
   * @param authService 
   */
  constructor(
	private authService : AuthService
  ){
	  this.accessToken = this.authService.accessToken();
  }

  ngOnInit(): void {
  
  }

  logout(){
	  this.authService.logout(this.accessToken);
  }

}
