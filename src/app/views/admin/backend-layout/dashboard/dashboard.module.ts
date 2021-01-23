import { BrowserModule } from '@angular/platform-browser';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MonitorComponent } from './monitor/monitor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    MonitorComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
