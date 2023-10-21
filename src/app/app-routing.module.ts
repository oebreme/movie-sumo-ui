import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./presentation/login/login.component";
import { DashboardComponent } from "./presentation/dashboard/dashboard.component";
import { NotFoundComponent } from "./presentation/not-found/not-found.component";
import { SignUpComponent } from "./presentation/sign-up/sign-up.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent,
    children: [
      { path: 'sign-up', component: SignUpComponent },
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
