import { MovieProvider } from "./movie-provider.model";

export interface MovieDetails {
  overview: string;
  runtime: number;
  releaseDate: string;
  availableOn: MovieProvider[] | [];
  ratingAverage: number;
  ratingVoteCount: number;
}
