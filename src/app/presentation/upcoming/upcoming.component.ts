import { Component, Input } from '@angular/core';
import { TrendingMovieComponent } from '../trending/trending-movie/trending-movie.component';
import { UpcomingMovieViewModel } from './upcoming-movie.viewmodel';
import { UpcomingMovieComponent } from './upcoming-movie/upcoming-movie.component';

@Component({
  selector: 'moviesumo-upcoming',
  standalone: true,
  imports: [TrendingMovieComponent, UpcomingMovieComponent],
  templateUrl: './upcoming.component.html',
})
export class UpcomingComponent {
  PLACEHOLDER_COUNT = Array.from({length: 20});

  @Input({ required: true })
  upcomingMovies!: UpcomingMovieViewModel[];

  @Input({ required: true })
  isLoadingUpcomingMovies!: boolean;
  protected readonly Array = Array;
}
