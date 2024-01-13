export interface CustomAuthConfig {
  domain: string,
  clientId: string,
  authorizationParams: {
    audience?: string,
    redirect_uri: string
  },
  apiUri: string,
  errorPath: string,
}
