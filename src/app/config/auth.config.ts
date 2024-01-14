declare interface AuthConfig {
  domain: string,
  clientId: string,
  authorizationParams: {
    audience: string,
    redirect_uri: string
  },
  apiUri: string,
  errorPath: string,
  httpInterceptor: {
    allowedList: string[],
  }
}

export const authConfig: AuthConfig = {
  domain: 'dev-oebreme.eu.auth0.com',
  clientId: 'Dcq3p7TmL4VRhAeSWZFDoXeqZoi0knIp',
  authorizationParams: {
    audience: 'movie-sumo-gateway.oebreme.dev',
    redirect_uri: window.location.origin
  },
  apiUri: 'https://movie-sumo-gateway-auth-test.oebreme.dev',
  errorPath: "/error",
  httpInterceptor: {
    allowedList:['https://movie-sumo-gateway-auth-test.oebreme.dev/*'],
  }
}
