import { Inject, Injectable } from '@angular/core';
import { SearchApi, SearchApiEndpoint } from "./search-api";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { SearchResult } from "../domain/search-result.model";
import { SearchResultMapper } from "../data/search-result-mapper.service";
import { TMDB_DEFAULT_LANGUAGE, TMDB_TOKEN } from "../../config/tmdb.config";
import { SearchResultListDto } from "../../delivery/rest/search-result-list.dto";

// TODO:
//  - aufräumen
//  - refactoring
@Injectable()
export class SearchService implements SearchApi {

  /**
   * used as a fallback when no page is provided
   */
  readonly FIRST_PAGE: string = '1';
  readonly endpoint = SearchApiEndpoint.VALUE;

  constructor(private readonly http: HttpClient,
              private readonly mapper: SearchResultMapper,
              @Inject(TMDB_DEFAULT_LANGUAGE) private readonly defaultLanguage: string,
              @Inject(TMDB_TOKEN) private readonly authToken: string) {
  }

  public getSearchResult(searchTerm: string, page?: string): Observable<SearchResult[]> {
    // const headers = this.buildHttpHeader();

    return this.http.get<SearchResultListDto>(
        `${this.endpoint}` + '/api/v2/search' + `/${searchTerm}` + `/${this.setGivenOrFallbackPage(page)}`,
      // {headers: headers}
    )
        .pipe(map(response => this.mapper.mapFromApi(response)));
  }

  // private buildHttpHeader(): HttpHeaders {
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Authorization', `${this.authToken}`)
  //   return headers.append('Content-Type', 'application/json');
  // }

  private setGivenOrFallbackLanguage(language: string | undefined): string {
    if (language !== undefined) {
      return language;
    } else {
      return this.defaultLanguage;
    }
  }

  private setGivenOrFallbackPage(page: string | undefined): string {
    if (page !== undefined) {
      return page;
    } else {
      return this.FIRST_PAGE;
    }
  }
}
