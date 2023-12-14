import { Component } from '@angular/core';
import { SearchResult } from "../../shared/domain/search-result.model";
import { SearchService } from "../../shared/delivery/search.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  whichList?: string = 'favorites';
  searchResults?: SearchResult[];

  constructor(private readonly searchService: SearchService) {
  }

  handleGivenSearchTerm(searchTerm: string): void {
    this.searchService.getSearchResult(searchTerm).subscribe((data) => {
      this.searchResults = data;
    });
  }

  handleAddToFavorites(movieId: number): void {
    console.log(`Add "${movieId}" to ${this.whichList} recognized by Parent-Comp`);
  }
}
