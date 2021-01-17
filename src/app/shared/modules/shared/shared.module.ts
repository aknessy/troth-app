import { TopMenubarComponent } from './../../components/top-menubar/top-menubar.component';
import { BtnLoaderComponent } from '../../components/btn-loader/btn-loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BtnLoaderComponent,
    TopMenubarComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    BtnLoaderComponent,
    TopMenubarComponent
  ]
})
export class SharedModule { }
