import { MovieDetails } from "../../movie-details.model";

export interface Movie {
  movieId: string | null;
  externalId: number;
  title: string;
  posterImageUrl: string;
  genres: string[];
  details: MovieDetails;
}
