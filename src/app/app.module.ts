import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './presentation/login/login.component';
import { DashboardComponent } from './presentation/dashboard/dashboard.component';
import { NotFoundComponent } from './presentation/not-found/not-found.component';
import { SignUpComponent } from './presentation/sign-up/sign-up.component';
import { ListComponent } from './presentation/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NotFoundComponent,
    SignUpComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
