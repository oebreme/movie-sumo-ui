import { Component } from '@angular/core';
import { TrendingComponent } from "../home/trending/trending.component";
import { UpcomingComponent } from "../home/upcoming/upcoming.component";

@Component({
  selector: 'moviesumo-search',
  standalone: true,
  imports: [
    TrendingComponent,
    UpcomingComponent
  ],
  templateUrl: './search.component.html'
})
export class SearchComponent {

}
