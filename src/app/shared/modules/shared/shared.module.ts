import { BtnLoaderComponent } from '../../components/btn-loader/btn-loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    BtnLoaderComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports : [
    BtnLoaderComponent
  ]
})
export class SharedModule { }
