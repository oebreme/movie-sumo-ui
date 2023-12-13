import { Injectable } from '@angular/core';
import { SearchApi, SearchApiEndpoint } from "./search-api";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { SearchResult } from "../domain/search-result.model";
import { SearchResultResponseDto } from "./search-result.dto";
import { SearchResultMapper } from "../data/search-result-mapper.service";
import {environment} from "../../../environments/environment";

@Injectable()
export class SearchService implements SearchApi {

  readonly fallbackLanguage = SearchApiEndpoint.FALLBACK_LANGUAGE;
  readonly fallbackPage = SearchApiEndpoint.FALLBACK_PAGE;
  readonly endpoint = SearchApiEndpoint.VALUE;

  constructor(private readonly http: HttpClient,
              private readonly mapper: SearchResultMapper) {
  }

  public getSearchResult(searchTerm: string, language?: string, page?: string): Observable<SearchResult[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer TODO.TODO.TODO')
    headers = headers.append('Content-Type', 'application/json');

    return this.http.get<SearchResultResponseDto>(
        `${environment.TEST_URL}` + searchTerm + '&include_adult=false&language=' + this.setGivenOrFallbackLanguage(language) + '&page=' + this.setGivenOrFallbackPage(page),
      {headers: headers})
        .pipe(map(response => this.mapper.mapFromApi(response)));
  }

  private setGivenOrFallbackLanguage(language: string | undefined): string {
    if (language !== undefined) {
      return language;
    } else {
      return this.fallbackLanguage;
    }
  }

  private setGivenOrFallbackPage(page: string | undefined): string {
    if (page !== undefined) {
      return page;
    } else {
      return this.fallbackPage;
    }
  }
}
