import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./presentation/login/login.component";
import { HomeComponent } from "./presentation/home/home.component";
import { NotFoundComponent } from "./presentation/not-found/not-found.component";
import { SignUpComponent } from "./presentation/sign-up/sign-up.component";
import { ListComponent } from "./presentation/list/list.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },
  { path: 'list/:id', component: ListComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
