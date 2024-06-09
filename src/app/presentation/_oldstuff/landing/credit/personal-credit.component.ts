import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'moviesumo-personal-credit',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  template:
    '<div class="min-w-[300px] m-8 flex flex-col items-center justify-center">' +
    '  <a href="https://github.com/oebreme" target="_blank">' +
    '   <img ngSrc="assets/img/personal-credits.png" alt="Personal" height="196" width="196"/>' +
    '  </a>' +
    '  <h3 class="text-lg font-bold mt-8 text-center">(Me)</h3>' +
    '</div>',
})
export class PersonalCreditComponent {
}
