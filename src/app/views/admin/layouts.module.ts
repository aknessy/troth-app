import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsRoutingModule } from './backend-layout/layouts-routing.module';
import { MainComponent } from './main.component';
import { TopbarComponent } from './backend-layout/components/topbar/topbar.component';
import { SidebarLeftComponent } from './backend-layout/components/sidebar-left/sidebar-left.component';
import { SidebarRightComponent } from './backend-layout/components/sidebar-right/sidebar-right.component';
import { FooterComponent } from './backend-layout/components/footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    LayoutsRoutingModule
  ],
  declarations: [
    MainComponent,
    TopbarComponent,
    SidebarLeftComponent,
    SidebarRightComponent,
    FooterComponent
  ]
})
export class LayoutsModule { }
