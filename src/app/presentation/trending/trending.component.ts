import { Component, Input } from '@angular/core';
import { TrendingMovieViewModel } from './trending-movie.viewmodel';
import { TrendingMovieComponent } from './trending-movie/trending-movie.component';

@Component({
  selector: 'moviesumo-trending',
  standalone: true,
  imports: [TrendingMovieComponent],
  templateUrl: './trending.component.html',
})
export class TrendingComponent {
  PLACEHOLDER_COUNT = Array.from({length: 20});

  @Input({ required: true })
  trendingMovies!: TrendingMovieViewModel[];

  @Input({ required: true })
  isLoadingTrendingMovies!: boolean;
  protected readonly Array = Array;
}
