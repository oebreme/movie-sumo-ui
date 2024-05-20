import { Injectable } from '@angular/core';
import { Movie } from "../../../domain/model/movie/movie.model";
import { MovieDto } from "./movie.dto";
import { MovieDetailsDto } from "./movie-details.dto";
import { MovieDetails } from "../../../domain/movie-details.model";
import { MovieProviderDto } from "./movie-provider.dto";
import { MovieProvider } from "../../../domain/movie-provider.model";

@Injectable({
  providedIn: 'root'
})
export class MovieMapperService {

  public mapFromApi(dto: MovieDto): Movie {
    return {
      movieId: dto.movieId,
      externalId: dto.externalId,
      title: dto.title,
      posterImageUrl: dto.posterImageUrl,
      genres: dto.genres,
      details: this.mapDetailsFromApi(dto.details)
    } as Movie
  }

  private mapDetailsFromApi(dto: MovieDetailsDto): MovieDetails {
    return {
      overview: dto.overview,
      runtime: dto.runtime,
      releaseDate: dto.releaseDate,
      availableOn: this.mapMovieProvidersFromApi(dto.availableOn.providers),
      ratingAverage: dto.ratingAverage,
      ratingVoteCount: dto.ratingVoteCount
    }
  }

  private mapMovieProvidersFromApi(providerDto: MovieProviderDto[]): MovieProvider[] {
    return providerDto.map((dto: MovieProviderDto) => {
      return {
        externalId: dto.externalId,
        name: dto.name,
        logoUrl: dto.logoUrl,
        displayOrder: dto.displayOrder
      }
    });
  }
}
