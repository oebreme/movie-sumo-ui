import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TmdbAttributionComponent } from './attribution/tmdb-attribution.component';
import { JustwatchAttributionComponent } from './attribution/justwatch-attribution.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TmdbAttributionComponent,
    JustwatchAttributionComponent,
    RouterLink,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
