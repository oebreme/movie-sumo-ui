import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {RegisterUserService} from "../../shared/delivery/register-user.service";

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
