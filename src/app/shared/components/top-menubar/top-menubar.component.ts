import { Component, OnInit } from '@angular/core';
import { faAlignJustify, faEnvelopeSquare, faUser, faCogs, faBell } from '@fortawesome/free-solid-svg-icons'

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
