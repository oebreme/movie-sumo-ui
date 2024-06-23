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
  @Input({ required: true })
  upcomingMovies!: UpcomingMovieViewModel[];
}
