import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  userId?: number = 301142;
  favorites?: string[] = ["hi"];
  savedMovieCount: number = 31;

  constructor() {
  }

  ngOnInit(): void {

  }

  debug(): void {
    console.log("clicked");
  }
}
