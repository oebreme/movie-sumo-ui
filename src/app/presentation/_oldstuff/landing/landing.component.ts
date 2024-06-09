import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import { TmdbCreditComponent } from "./credit/tmdb-credit.component";
import { JustwatchCreditComponent } from "./credit/justwatch-credit.component";
import { PersonalCreditComponent } from "./credit/personal-credit.component";
import { ContributorCreditComponent } from "./credit/contributor-credit.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TmdbCreditComponent,
    JustwatchCreditComponent,
    PersonalCreditComponent,
    ContributorCreditComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
