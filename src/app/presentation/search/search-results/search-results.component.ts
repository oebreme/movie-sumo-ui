import { Component, Input } from '@angular/core';

@Component({
  selector: 'moviesumo-search-results',
  standalone: true,
  imports: [],
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent {
  @Input({ required: true })
  searchResults: any;
}
