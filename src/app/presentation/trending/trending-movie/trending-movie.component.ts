import { Component, Input } from '@angular/core';
import { TrendingMovieViewModel } from '../trending-movie.viewmodel';

@Component({
  selector: 'moviesumo-trending-movie',
  standalone: true,
  imports: [],
  templateUrl: './trending-movie.component.html',
})
export class TrendingMovieComponent {
  @Input({ required: true })
  movie!: TrendingMovieViewModel;
}
