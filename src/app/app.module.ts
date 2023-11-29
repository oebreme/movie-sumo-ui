import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './presentation/login/login.component';
import { HomeComponent } from './presentation/home/home.component';
import { NotFoundComponent } from './presentation/not-found/not-found.component';
import { ListComponent } from './presentation/list/list.component';
import { FavoritesComponent } from './presentation/favorites/favorites.component';
import { AuthModule } from "@auth0/auth0-angular";
import { AddComponent } from './presentation/add/add.component';
import { SearchComponent } from './presentation/search/search.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    ListComponent,
    FavoritesComponent,
    AddComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-oebreme.eu.auth0.com',
      clientId: 'Dcq3p7TmL4VRhAeSWZFDoXeqZoi0knIp',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
