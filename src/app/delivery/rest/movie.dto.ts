import { Movie as genMovie } from 'src/app/delivery/rest/generated/model/movie';

export type MovieDto = genMovie;

export type MoviePreviewDto = Omit<genMovie, 'details'>;
