import { Injectable } from '@angular/core';
import { MovieSearchResultListDto } from "./movie-search-result-list.dto";
import { MoviePreviewDto } from "../movie/movie-preview.dto";

@Injectable()
export class SearchResultMapper {
  // TODO
/*  public fromApi(searchResultDto: MovieSearchResultListDto): SearchResult[] {
    return searchResultDto.results.map((dto: MoviePreviewDto) => {
      return {
        id: dto.externalId,
        title: dto.title,
        imageUrl: dto.posterImageUrl,
        genres: dto.genres,
        releaseDate: dto.releaseDate
      };
    });
  }*/
}
