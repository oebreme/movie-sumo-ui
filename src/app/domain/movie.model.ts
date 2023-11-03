import { MovieDetails } from "./movie-details.model";

export interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  genres: string[];
  details: MovieDetails;
}

export type MoviePreview = Omit<Movie, 'details'>;
