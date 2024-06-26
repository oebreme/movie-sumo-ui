import { Component, OnInit } from '@angular/core';
import { SearchService } from "../../delivery/rest/search/search.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  listRef?: string;

  // searchResults?: SearchResult[];

  constructor(private readonly searchService: SearchService,
              private readonly route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.listRef = params['listRef'];
    });
  }

  // TODO
  // handleGivenSearchTerm(searchTerm: string): void {
  //   this.searchService.getSearchResult(searchTerm).subscribe((data) => {
  //     this.searchResults = data;
  //   });
  // }

  handleAddToFavorites(movieId: number): void {
    console.log(`Add "${movieId}" to "${this.listRef}" recognized by Parent-Comp`);
  }
}
