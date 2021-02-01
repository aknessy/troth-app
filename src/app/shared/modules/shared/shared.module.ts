import { MatCheckboxModule } from '@angular/material/checkbox';
import { BtnLoaderComponent } from '../../components/btn-loader/btn-loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModuleLoadingComponent } from '../../components/module-loading/module-loading.component';

@NgModule({
  declarations: [
    BtnLoaderComponent,
    ModuleLoadingComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    MatButtonModule,
    MatCheckboxModule,
    FontAwesomeModule
  ],
  exports : [
    BtnLoaderComponent,
    ModuleLoadingComponent
  ]
})
export class SharedModule { }
