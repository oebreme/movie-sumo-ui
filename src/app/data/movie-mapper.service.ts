import { Injectable } from '@angular/core';
import { Movie, MoviePreview } from "../domain/movie.model";
import { MovieDto } from "../delivery/rest/movie.dto";
import { MovieDetailsDto } from "../delivery/rest/movie-details.dto";
import { MovieDetails } from "../domain/movie-details.model";
import { MovieProviderDto } from "../delivery/rest/movie-provider.dto";
import { MovieProvider } from "../domain/movie-provider.model";

@Injectable({
  providedIn: 'root'
})
export class MovieMapperService {

  public mapFromApi(movieDto: MovieDto): Movie | MoviePreview {
    if (this.containsMovieDetails(movieDto)) {
       return {
         id: movieDto.id,
         title: movieDto.title,
         imageUrl: movieDto.imageUrl,
         genres: movieDto.genres,
         details: this.mapDetailsFromApi(movieDto.details!)
       } as Movie
    } else {
      return {
         id: movieDto.id,
         title: movieDto.title,
         imageUrl: movieDto.imageUrl,
         genres: movieDto.genres
      } as MoviePreview
    }
  }

  private mapDetailsFromApi(movieDetailsDto: MovieDetailsDto): MovieDetails {
    return {
      runtime: movieDetailsDto.runtime,
      releaseDate: movieDetailsDto.releaseDate,
      overview: movieDetailsDto.overview,
      availableOn: this.mapMovieProvidersFromApi(movieDetailsDto.availableOn)
    }
  }

  private mapMovieProvidersFromApi(movieProviderDto: MovieProviderDto[]): MovieProvider[] {
    return movieProviderDto.map((dto: MovieProviderDto) => {
      return {
        name: dto.name,
        logoUrl: dto.logoUrl,
        displayOrder: dto.displayOrder
      }
    });
  }

  private containsMovieDetails(movieDto: MovieDto): boolean {
    /**
     * non-strict comparison is intended because I want to check for 'null' as well
     */
    // return movieDto.details != undefined || !('details' in movieDto);
    return movieDto.details != undefined;
  }
}
