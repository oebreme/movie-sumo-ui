import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'moviesumo-tmdb-credit',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  template:
    '<div class="min-w-[300px] m-8">' +
    '  <a href="https://www.themoviedb.org/" target="_blank">' +
    '    <img ngSrc="assets/img/tmdb-credits.png" alt="Logo of TMDB" height="237" width="300"/>' +
    '  </a>' +
    '</div>',
})
export class TmdbCreditComponent {
}
