// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


import { authConfig } from "../app/config/auth.config";

export const environment = {
  production: false,
  authConfig: authConfig,
  defaultLanguage: 'de',
  movieSumoGatewayUrl: 'http://localhost:8085'
};
