import { Injectable } from '@angular/core';
import { SearchResult } from "../../../shared/domain/search-result.model";
import { SearchResultDto } from "../../delivery/rest/search-result";
import { SearchResultListDto } from "../../delivery/rest/search-result-list.dto";

@Injectable()
export class SearchResultMapper {
  public fromApi(searchResultDto: SearchResultListDto): SearchResult[] {
    return searchResultDto.results.map((dto: SearchResultDto) => {
      return {
        id: dto.externalId,
        title: dto.title,
        imageUrl: dto.posterImageUrl,
        genres: dto.genres,
        releaseDate: dto.releaseDate
      };
    });
  }
}