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
  @Input({ required: true })
  trendingMovies!: TrendingMovieViewModel[];
}
