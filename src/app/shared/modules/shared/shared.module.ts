import { BtnLoaderComponent } from '../../components/btn-loader/btn-loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    BtnLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    BtnLoaderComponent
  ]
})
export class SharedModule { }
