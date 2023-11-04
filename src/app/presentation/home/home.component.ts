import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userId?: 301142;
  favorites?: string[] = ["hi"];
  idOfList?: number = 10;
  listName: string = "Favorites";
  savedMovieCount: number = 31;
}
