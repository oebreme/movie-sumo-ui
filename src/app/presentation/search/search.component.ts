import { Component } from '@angular/core';
import { TrendingComponent } from "../home/trending/trending.component";
import { UpcomingComponent } from "../home/upcoming/upcoming.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { HttpClient } from "@angular/common/http";
import { MovieSearchResultListDto } from "../../delivery/rest/search/movie-search-result-list.dto";
import { MoviePreview } from "../../delivery/rest/generated/model/movie-preview.api";
import { SearchResultViewModel } from "./search-results/search-result.viewmodel";

@Component({
  selector: 'moviesumo-search',
  standalone: true,
  imports: [
    TrendingComponent,
    UpcomingComponent,
    SearchBarComponent,
    SearchResultsComponent
  ],
  templateUrl: './search.component.html'
})
export class SearchComponent {

  someResults: SearchResultViewModel[] = [];

  constructor(private readonly http: HttpClient) {
  }

  public findMoviesBySearchTerm(searchTerm: string): void {
    console.log(searchTerm);
    this.http
      .get<MovieSearchResultListDto>(`http://localhost:8085/api/v3/search?queryTerm=${searchTerm}`)
      .subscribe((data) => {
        this.someResults = this.mapFromApi(data);
      });
  }

  private mapFromApi(dto: MovieSearchResultListDto): SearchResultViewModel[] {
    return dto.results.map((data: MoviePreview): SearchResultViewModel => {
      return {
        externalId: data.externalId,
        title: data.title,
        genres: data.genres,
        posterImageUrl: data.posterImageUrl,
        releaseDate: new Date(data.releaseDate),
      }
    })
  }
}
