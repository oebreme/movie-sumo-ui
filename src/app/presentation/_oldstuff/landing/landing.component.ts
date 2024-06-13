import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TmdbAttributionComponent } from './attribution/tmdb-attribution.component';
import { JustwatchAttributionComponent } from './attribution/justwatch-attribution.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TmdbAttributionComponent,
    JustwatchAttributionComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
