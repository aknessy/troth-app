import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MonitorComponent } from './monitor/monitor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const childRoutes = [
  {
    path : '',
    component : MonitorComponent,
  },
  {
    path : 'profile',
    component : ProfileComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes)
  ],
  exports : [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
