import { Inject, Injectable } from '@angular/core';
import { SearchApi } from "./search-api";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { SearchResult } from "../domain/search-result.model";
import { SearchResultMapper } from "../data/search-result-mapper.service";
import { SearchResultListDto } from "../../delivery/rest/search-result-list.dto";
import { GATEWAY_BASE_URL } from "../../config/gateway.config";

@Injectable()
export class SearchService implements SearchApi {

  /**
   * used as a fallback when no page is provided
   */
  private readonly FIRST_PAGE: string = '1';

  constructor(private readonly http: HttpClient,
              private readonly mapper: SearchResultMapper,
              @Inject(GATEWAY_BASE_URL) private readonly endpoint: string) {
  }

  public getSearchResult(searchTerm: string, page?: string): Observable<SearchResult[]> {
    return this.http.get<SearchResultListDto>(
        `${this.endpoint}/api/v2/search` + `?queryTerm=${searchTerm}` + `&page=${this.setGivenOrDefaultPage(page)}`,
    ).pipe(map(response => this.mapper.fromApi(response)));
  }

  private setGivenOrDefaultPage(page: string | undefined): string {
    if (page !== undefined) {
      return page;
    } else {
      return this.FIRST_PAGE;
    }
  }
}
