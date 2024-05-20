import { InjectionToken } from "@angular/core";
import { environment as env } from "../../environments/environment";

export const GATEWAY_BASE_URL = new InjectionToken('Base Url for movie-sumo-gateway', {
  factory: () => env.movieSumoGatewayUrl
})
