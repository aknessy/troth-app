import { MainComponent } from './../main.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes : Routes = [
  {
    /**
     * On successful login. your backend users should be redirected to
     * this route url. i.e /backend (Use this route only in your auth component
     * after login has been verified.)
     */
    path : '',
    component : MainComponent,
    children : [
      {
        path : 'dashboard',
        loadChildren : () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class LayoutsRoutingModule { }
