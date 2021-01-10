import { SharedModule } from '../app/shared/modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { LayoutsModule } from './views/layouts/layouts.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from 'src/app/views/auth/auth.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BtnLoaderComponent } from './shared/components/btn-loader/btn-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ErrorPageComponent,
    BtnLoaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    LayoutsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }