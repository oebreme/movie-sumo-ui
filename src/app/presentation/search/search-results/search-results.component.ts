import { Component, Input } from '@angular/core';
import { SearchResultViewModel } from "./search-result.viewmodel";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'moviesumo-search-results',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent {
  @Input({ required: true })
  searchResults!: SearchResultViewModel[];

  public setFallbackImageIfEmpty(e: string): string {
    return e ? e : "assets/img/no-image-available-500x750.png";
  }
}
