// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {CustomAuthConfig} from "../app/shared/config/auth.config";

export const authConfig: CustomAuthConfig = {
  domain: 'dev-oebreme.eu.auth0.com',
  clientId: 'Dcq3p7TmL4VRhAeSWZFDoXeqZoi0knIp',
  authorizationParams: {
    audience: 'movie-sumo-gateway.oebreme.dev',
    redirect_uri: window.location.origin
  },
  apiUri: 'https://movie-sumo-gateway-auth-test.oebreme.dev',
  errorPath: "/error"
}

export const environment = {
  production: false,
  tmdbDefaultLanguage: 'de',
  tmdbToken: 'QmVhcmVyIGV5SmhiR2NpT2lKSVV6STFOaUo5LmV5SmhkV1FpT2lJell6RXdNemxqTURNNU5qbGhaRGczTkdNM01tTmxNbU0zTXpjMlpUQXhPQ0lzSW5OMVlpSTZJalkxTTJOa09UVm1OekU1WVdWaU1EQm1aVE5qTnpZNFlTSXNJbk5qYjNCbGN5STZXeUpoY0dsZmNtVmhaQ0pkTENKMlpYSnphVzl1SWpveGZRLmhCZ1dyampTaVRqZVBKNTk1WlBuZk1EdXh2SWZaTjVvaF9QZ1Bub3RwS0E=',
  auth: authConfig,
  httpInterceptor: {
    allowedList:['https://movie-sumo-gateway-auth-test.oebreme.dev/*'],
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
