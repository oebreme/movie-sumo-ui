import { Component, Input } from '@angular/core';

@Component({
  selector: 'moviesumo-watchlist-card',
  standalone: true,
  imports: [],
  templateUrl: './watchlist-card.component.html'
})
export class WatchlistCardComponent {
  @Input({ required: true })
  movieCount!: number;

  onClickEditWatchlist(): void {
    console.log('[TODO] Edit Watchlist has been clicked');
  }
}
