import { Component } from '@angular/core';
import { SearchBarComponent } from "../search/search-bar/search-bar.component";
import { SearchResultsComponent } from "../search/search-results/search-results.component";
import { DatePipe } from "@angular/common";
import { WatchlistCardComponent } from "./watchlist-card/watchlist-card.component";
import { FavoriteCardComponent } from "./favorite-card/favorite-card.component";

@Component({
  selector: 'moviesumo-library',
  standalone: true,
  imports: [
    SearchBarComponent,
    SearchResultsComponent,
    DatePipe,
    WatchlistCardComponent,
    FavoriteCardComponent
  ],
  templateUrl: './library.component.html'
})
export class LibraryComponent {

}
