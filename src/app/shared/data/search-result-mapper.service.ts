import { Injectable } from '@angular/core';
import { SearchResultResponseDto } from "../delivery/search-result.dto";
import { SearchResult } from "../domain/search-result.model";

@Injectable()
export class SearchResultMapper {
  public mapFromApi(searchResultDto: SearchResultResponseDto): SearchResult[] {
    return searchResultDto.results.map((dto) => {
      return {
        id: dto.id,
        title: dto.title,
        imageUrl: this.buildImgUrl(dto.backdrop_path),
        genres: dto.genre_ids,
        overview: dto.overview,
        releaseDate: dto.release_date
      };
    });
  }

  private buildImgUrl(imgPath: string): string {
    return "https://image.tmdb.org/t/p/w500/" + imgPath;
  }
}
