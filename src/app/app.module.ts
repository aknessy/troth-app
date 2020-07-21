import { CommonModule } from '@angular/common';
import { LayoutsModule } from './views/layouts/layouts.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from 'src/app/views/auth/auth.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    LayoutsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }