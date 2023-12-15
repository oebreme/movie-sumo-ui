import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./presentation/login/login.component";
import { HomeComponent } from "./presentation/home/home.component";
import { NotFoundComponent } from "./presentation/not-found/not-found.component";
import { ListComponent } from "./presentation/list/list.component";
import { FavoritesComponent } from "./presentation/favorites/favorites.component";
import { AuthGuard } from "@auth0/auth0-angular";
import { AddComponent } from "./shared/presentation/add/add.component";
import { SearchComponent } from "./presentation/search/search.component";
import { LibraryComponent } from "./presentation/library/library.component";

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
    redirectTo: '/home',
    pathMatch: 'full'
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
