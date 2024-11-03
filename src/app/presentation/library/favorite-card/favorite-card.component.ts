import { Component, Input } from '@angular/core';

@Component({
  selector: 'moviesumo-favorite-card',
  standalone: true,
  imports: [],
  templateUrl: './favorite-card.component.html'
})
export class FavoriteCardComponent {
  @Input({ required: true })
  movieCount!: number;

  onClickEditFavorites(): void {
    console.log('[TODO] Edit Favorites has been clicked');
  }
}
