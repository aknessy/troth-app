import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MonitorComponent } from './monitor/monitor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const childRoutes = [
  {
    path : '',
    component : MonitorComponent,
    // Register an auth guard here if you have created one
    // e.g canActivate : [guard-name]
  },
  {
    path : 'profile',
    component : ProfileComponent,
    // consider registering an auth guard here to protect this route
    // e.g canActivate : [guard-name]
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
