import { Component } from '@angular/core';
import { TrendingComponent } from "../home/trending/trending.component";
import { UpcomingComponent } from "../home/upcoming/upcoming.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";

@Component({
  selector: 'moviesumo-search',
  standalone: true,
  imports: [
    TrendingComponent,
    UpcomingComponent,
    SearchBarComponent
  ],
  templateUrl: './search.component.html'
})
export class SearchComponent {

}
