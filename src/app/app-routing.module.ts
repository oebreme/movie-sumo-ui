import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from "./presentation/_oldstuff/favorites/favorites.component";
import { AuthGuard } from "@auth0/auth0-angular";
import { AddComponent } from "./presentation/_oldstuff/add/add.component";
import { LoginComponent } from "./presentation/_oldstuff/login/login.component";
import { HomeComponent } from "./presentation/_oldstuff/home/home.component";
import { SearchComponent } from "./presentation/_oldstuff/search/search.component";
import { ListComponent } from "./presentation/_oldstuff/list/list.component";
import { LibraryComponent } from "./presentation/_oldstuff/library/library.component";
import { LandingComponent } from "./presentation/_oldstuff/landing/landing.component";
import { NotFoundComponent } from "./presentation/_oldstuff/not-found/not-found.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':listRef/add',
    component: AddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'list',
    component: ListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'list/:listRef',
    component: ListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'list/:listRef/add',
    component: AddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'library',
    component: LibraryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
