import { Observable } from "rxjs";

export interface SearchApi {
  endpoint: SearchApiEndpoint;
  getSearchResult<T extends string>(arg: T, arg2: T, arg3: T): Observable<any>;
}

export enum SearchApiEndpoint {
  VALUE = 'https://api.themoviedb.org/3/search/movie?query=',
  FALLBACK_LANGUAGE = 'de',
  FALLBACK_PAGE = '1'
}
