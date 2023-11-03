import { Injectable } from '@angular/core';
import { Movie as MovieDto } from 'src/app/delivery/rest/generated/model/movie';
import { Movie, MoviePreview } from "../domain/movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieMapperService {

  mapFromApi(movieDto: MovieDto): Movie | MoviePreview {
    /**
     non-strict comparison is intended because I want to check for 'null' as well
     */
    if (movieDto.details != undefined) {
       return {
         id: movieDto.id,
         title: movieDto.title,
         imageUrl: movieDto.imageUrl,
         genres: movieDto.genres,
         details: movieDto.details
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
}
