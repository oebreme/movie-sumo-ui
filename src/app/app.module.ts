import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './presentation/login/login.component';
import { NotFoundComponent } from './presentation/not-found/not-found.component';
import { ListComponent } from './presentation/list/list.component';
import { FavoritesComponent } from './presentation/favorites/favorites.component';
import {AuthHttpInterceptor, AuthModule} from "@auth0/auth0-angular";
import { AddComponent } from './shared/presentation/add/add.component';
import { FormsModule } from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { HomeModule } from "./presentation/home/home.module";
import { SearchModule } from "./presentation/search/search.module";
import { LibraryModule } from "./presentation/library/library.module";
import { SharedModule } from "./shared/shared.module";

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
    AuthModule.forRoot({
      domain: 'dev-oebreme.eu.auth0.com',
      clientId: 'Dcq3p7TmL4VRhAeSWZFDoXeqZoi0knIp',
      authorizationParams: {
        audience: 'movie-sumo-gateway.oebreme.dev',
        redirect_uri: window.location.origin
      },
      httpInterceptor: {
        allowedList:['https://movie-sumo-gateway-auth-test.oebreme.dev/*'],
      }
    }),
    FormsModule,
    HttpClientModule,
    HomeModule,
    SearchModule,
    LibraryModule,
    SharedModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
