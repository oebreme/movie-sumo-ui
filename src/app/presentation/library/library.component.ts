import { Component } from '@angular/core';
import { SearchBarComponent } from "../search/search-bar/search-bar.component";
import { SearchResultsComponent } from "../search/search-results/search-results.component";

@Component({
  selector: 'moviesumo-library',
  standalone: true,
  imports: [
    SearchBarComponent,
    SearchResultsComponent
  ],
  templateUrl: './library.component.html'
})
export class LibraryComponent {

}
