import { InjectionToken } from "@angular/core";
import { environment } from "../../environments/environment";

export const TMDB_DEFAULT_LANGUAGE = new InjectionToken('TMDB API Default language', {
  factory: () => environment.tmdbDefaultLanguage
})

export const TMDB_TOKEN = new InjectionToken('TMDB API Authorization Token', {
  factory: () => atob(environment.tmdbToken)
})

