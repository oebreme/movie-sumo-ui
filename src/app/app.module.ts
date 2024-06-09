import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment as env } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritesComponent } from './presentation/_oldstuff/favorites/favorites.component';
import { AddComponent } from './presentation/_oldstuff/add/add.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from '@angular/common/http';
import {
  AuthHttpInterceptor,
  AuthModule
} from '@auth0/auth0-angular';
import { HeaderComponent } from "./presentation/header/header.component";
import { LoginComponent } from "./presentation/_oldstuff/login/login.component";
import { NotFoundComponent } from "./presentation/_oldstuff/not-found/not-found.component";
import { ListComponent } from "./presentation/_oldstuff/list/list.component";
import { LibraryModule } from "./presentation/_oldstuff/library/library.module";
import { SearchModule } from "./presentation/_oldstuff/search/search.module";
import { HomeModule } from "./presentation/_oldstuff/home/home.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    ListComponent,
    FavoritesComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot(env.authConfig),
    FormsModule,
    HttpClientModule,
    HomeModule,
    SearchModule,
    LibraryModule,
    SharedModule,
    HeaderComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    }
  ],
  exports: [
    AddComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
