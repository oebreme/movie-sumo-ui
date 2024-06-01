import { Component } from '@angular/core';
import {RegisterUserService} from "../../../delivery/rest/user/register-user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  listName: string = "Favorites";
  savedMovieCount: number = 31;

  constructor(private readonly registerService: RegisterUserService) {
  }




}
