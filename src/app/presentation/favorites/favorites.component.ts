import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent {

  savedMovieCount: number = 31;

  debug(): void {
    console.log("clicked");
  }
}
