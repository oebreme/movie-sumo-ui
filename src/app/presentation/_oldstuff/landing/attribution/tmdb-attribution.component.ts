import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'moviesumo-tmdb-attribution',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: 'tmdb-attribution.component.html',
})
export class TmdbAttributionComponent {}
