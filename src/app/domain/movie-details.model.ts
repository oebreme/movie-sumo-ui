import { MovieProvider } from "./movie-provider.model";

export interface MovieDetails {
  runtime: number;
  releaseDate: string;
  overview: string;
  availableOn: MovieProvider[] | [];
}
