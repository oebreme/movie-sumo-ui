import { authConfig } from "../app/config/auth.config";

export const environment = {
  production: true,
  authConfig: authConfig,
  defaultLanguage: 'de',
  movieSumoGatewayUrl: 'https://movie-sumo-gateway.oebreme.dev'
};
