import { InjectionToken } from "@angular/core";
import { environment as env } from "../../environments/environment";

export const APP_DEFAULT_LANGUAGE = new InjectionToken('Default Application Language', {
  factory: () => env.movieSumoGatewayUrl
})
