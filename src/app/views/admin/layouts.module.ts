import { TopMenubarComponent } from '../../shared/components/top-menubar/top-menubar.component';
import { SidebarLeftComponent } from './backend-layout/components/sidebar-left/sidebar-left.component';
import { SharedModule } from './../../shared/modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsRoutingModule } from './backend-layout/layouts-routing.module';
import { MainComponent } from './main.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    SharedModule,
    FontAwesomeModule,
    PerfectScrollbarModule,
    LayoutsRoutingModule
  ],
  declarations: [
    TopMenubarComponent,
    MainComponent,
    SidebarLeftComponent
  ]
})
export class LayoutsModule { }
