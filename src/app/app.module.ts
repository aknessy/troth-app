import { AuthGuard } from './services/auth/auth-guard.service';
import { SharedModule } from '../app/shared/modules/shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from 'src/app/views/auth/auth.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth/auth.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { LayoutsModule } from './views/admin/layouts.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    FontAwesomeModule,
    PerfectScrollbarModule,
    LayoutsModule,
    AppRoutingModule
  ],
  providers: [
    HttpClientModule,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }