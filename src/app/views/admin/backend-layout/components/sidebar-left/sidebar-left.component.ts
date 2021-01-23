import { NavigationItems } from './../../../../../services/navigation-items';
import { AuthService } from './../../../../../services/auth/auth.service';
import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { 
  faChalkboard, 
  faMoneyBillWave, 
  faUser, 
  faLaptopHouse,
  faChartBar,
  faCashRegister,
  faChartLine,
  faDice,
  faUsers,
  faHourglass,
  faUserCog,
  faStore,
  faThList,
  faPlusCircle,
  faHouseUser,
  faRoute,
  faUserTie,
  faToolbox,
  faUsersCog,
  faTools,
  faTractor,
  faPlug,
  faUserPlus
  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.scss']
})
export class SidebarLeftComponent implements OnInit {
  /**
   * Store Navigation list items
   * @var NavigationItems
   */
  navItems : any;

  /**
   * Get the current usertype
   * @var string
   */
  userType : any;

  /**
   * UI Design Icons
   * @var IconDefinition
   */
  faChalkboard = faChalkboard;
  faMoneyBillWave = faMoneyBillWave; 
  faUser = faUser;
  faLaptopHouse = faLaptopHouse;
  faChartBar = faChartBar;
  faCashRegister = faCashRegister;
  faChartLine = faChartLine;
  faDice = faDice;
  faUsers = faUsers;
  faHourglass = faHourglass;
  faUserCog = faUserCog;
  faStore = faStore;
  faThList = faThList;
  faPlusCircle = faPlusCircle;
  faHouseUser = faHouseUser;
  faRoute = faRoute;
  faUserTie = faUserTie;
  faUserPlus = faUserPlus;
  faToolbox = faToolbox;
  faUsersCog = faUsersCog;
  faTools = faTools;
  faTractor = faTractor;
  faPlug = faPlug;

  /**
   * Icon mapping
   * @var any
   */
  iconMapping : any;

  /**
   * Scrollbar config
   * @var any
   */
  perfectScrollbarConfig : any;

  /**
   * Store sidebar menu dropdown state
   * @var boolean
   */
  isMenuOpen = false;

  /**
   * 
   * @param authService 
   */
  constructor(
    private renderer : Renderer2,
    private el: ElementRef,
    private authService : AuthService
  ) { 
    this.userType = this.authService.userType();
    this.perfectScrollbarConfig = {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20,
      suppressScrollX: true
    }

  }

  ngOnInit(): void {
    switch (this.userType) {
      case 'merchant':
        break;
    
      default:
        this.navItems = NavigationItems
        break;
    }
  }

  menuOpened($event){
    let eventPath = $event.path[1]
    let parent = $event.path[2]
    let children = parent.children
    
    for(let i = 0; i < children.length; i++){
      if(children[i].classList.contains('open'))
        children[i].classList.remove('open')
    }
   
    eventPath.classList.add('open')

    return false;
  }

}
