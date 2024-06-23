import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviePreviewDto } from '../../delivery/rest/movie/movie-preview.dto';
import { TrendingMovieViewModel } from '../trending/trending-movie.viewmodel';
import { TrendingComponent } from '../trending/trending.component';

@Component({
  selector: 'moviesumo-home',
  standalone: true,
  imports: [TrendingComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  something: TrendingMovieViewModel[] = [];

  constructor(private readonly http: HttpClient) {
    this.http
      .get<MoviePreviewDto[]>('http://localhost:8085/api/v3/movies/trends')
      .subscribe((data) => {
        this.something = this.mapFromApi(data);
      });
  }

  private mapFromApi(dto: MoviePreviewDto[]): TrendingMovieViewModel[] {
    return dto.map((data: MoviePreviewDto) => {
      return {
        externalId: data.externalId,
        title: data.title,
        genres: data.genres,
        posterImageUrl: data.posterImageUrl,
        releaseDate: new Date(data.releaseDate),
      };
    });
  }
}
