import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviePreviewDto } from '../../delivery/rest/movie/movie-preview.dto';
import { TrendingMovieViewModel } from "./trending/trending-movie.viewmodel";
import { TrendingComponent } from "./trending/trending.component";
import { UpcomingComponent } from "./upcoming/upcoming.component";
import { UpcomingMovieViewModel } from "./upcoming/upcoming-movie.viewmodel";

@Component({
  selector: 'moviesumo-home',
  standalone: true,
  imports: [TrendingComponent, UpcomingComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  trendingMovies: TrendingMovieViewModel[] = [];
  isLoadingTrendingMovies: boolean = true;
  upcomingMovies: UpcomingMovieViewModel[] = [];
  isLoadingUpcomingMovies: boolean = true;

  constructor(private readonly http: HttpClient) {

  }

  ngOnInit(): void {
    this.http
      .get<MoviePreviewDto[]>('http://localhost:8085/api/v3/movies/trends')
      .subscribe((data) => {
        this.trendingMovies = this.mapFromApi(data);
        this.isLoadingTrendingMovies = false;
      });

    this.http
      .get<MoviePreviewDto[]>('http://localhost:8085/api/v3/movies/upcoming')
      .subscribe((data) => {
        this.upcomingMovies = this.mapFromApiDifferent(data);
        this.isLoadingUpcomingMovies = false;
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
