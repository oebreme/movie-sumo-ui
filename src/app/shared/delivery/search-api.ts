import { Observable } from "rxjs";

export interface SearchApi {
  endpoint: SearchApiEndpoint;
  getSearchResult<T extends string>(arg: T, arg2: T, arg3: T): Observable<any>;
}

// TODO:
//  - get from env and not hardcoded
export enum SearchApiEndpoint {
  VALUE = 'http://localhost:8080'
}
