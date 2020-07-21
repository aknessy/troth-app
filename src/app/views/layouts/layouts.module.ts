import { FooterComponent } from 'src/app/views/layouts/backend-layout/footer/footer.component';
import { SidebarRightComponent } from 'src/app/views/layouts/backend-layout/sidebar-right/sidebar-right.component';
import { SidebarLeftComponent } from './backend-layout/sidebar-left/sidebar-left.component';
import { TopbarComponent } from './backend-layout/topbar/topbar.component';
import { MainComponent } from './backend-layout/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './backend-layout/layouts-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
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
