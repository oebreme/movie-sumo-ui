import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviePreviewDto } from '../../delivery/rest/movie/movie-preview.dto';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'moviesumo-home',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  something: any = [];

  constructor(private readonly http: HttpClient) {
    this.http
      .get<MoviePreviewDto>('http://localhost:8085/api/v3/movies/trends')
      .subscribe((data) => {
        this.something = data;
        console.log(data);
      });
  }
}
