import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from 'src/app/views/auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './views/error-page/error-page.component';


const routes: Routes = [
  {
    path : 'auth',
    component : AuthComponent
  },
  {
    path : '**',
    component : ErrorPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: false, useHash: true, relativeLinkResolution: 'legacy' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
