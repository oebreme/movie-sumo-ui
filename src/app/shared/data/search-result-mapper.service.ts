import { Injectable } from '@angular/core';
import { SearchResult } from "../domain/search-result.model";
import { SearchResultListDto } from "../../delivery/rest/search-result-list.dto";
import { SearchResultDto } from "../../delivery/rest/search-result";

// TODO:
//  - aufräumen
//  - refactoring

@Injectable()
export class SearchResultMapper {
  public mapFromApi(searchResultDto: SearchResultListDto): SearchResult[] {
    return searchResultDto.results.map((dto: SearchResultDto) => {
      return {
        id: dto.movieId,
        title: dto.title,
        imageUrl: dto.posterImageUrl,
        genres: dto.genres,
        releaseDate: dto.releaseDate
      };
    });
  }
}
