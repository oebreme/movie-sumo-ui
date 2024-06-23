import { Component, Input } from '@angular/core';
import { TrendingMovieViewModel } from '../trending-movie.viewmodel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'moviesumo-trending-movie',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './trending-movie.component.html',
})
export class TrendingMovieComponent {
  @Input({ required: true })
  movie!: TrendingMovieViewModel;
}
