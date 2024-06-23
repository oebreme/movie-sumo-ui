import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviePreviewDto } from '../../delivery/rest/movie/movie-preview.dto';
import { TrendingMovieViewModel } from '../trending/trending-movie.viewmodel';
import { TrendingComponent } from '../trending/trending.component';
import { UpcomingComponent } from '../upcoming/upcoming.component';
import { UpcomingMovieViewModel } from '../upcoming/upcoming-movie.viewmodel';

@Component({
  selector: 'moviesumo-home',
  standalone: true,
  imports: [TrendingComponent, UpcomingComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  something: TrendingMovieViewModel[] = [];
  somethingDifferent: UpcomingMovieViewModel[] = [];

  constructor(private readonly http: HttpClient) {
    this.http
      .get<MoviePreviewDto[]>('http://localhost:8085/api/v3/movies/trends')
      .subscribe((data) => {
        this.something = this.mapFromApi(data);
      });

    this.http
      .get<MoviePreviewDto[]>('http://localhost:8085/api/v3/movies/upcoming')
      .subscribe((data) => {
        this.somethingDifferent = this.mapFromApiDifferent(data);
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

  private mapFromApiDifferent(
    dto: MoviePreviewDto[],
  ): UpcomingMovieViewModel[] {
    return dto.map((data: MoviePreviewDto) => {
      return {
        externalId: data.externalId,
        posterImageUrl: data.posterImageUrl,
        releaseDate: new Date(data.releaseDate),
      };
    });
  }
}
