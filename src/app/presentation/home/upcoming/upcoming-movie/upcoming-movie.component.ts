import { Component, Input } from '@angular/core';
import { UpcomingMovieViewModel } from '../upcoming-movie.viewmodel';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'moviesumo-upcoming-movie',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './upcoming-movie.component.html',
})
export class UpcomingMovieComponent {
  @Input({ required: true })
  movie!: UpcomingMovieViewModel;
}
