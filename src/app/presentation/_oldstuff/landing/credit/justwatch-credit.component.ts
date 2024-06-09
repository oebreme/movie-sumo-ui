import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'moviesumo-justwatch-credit',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  template:
    '<div class="flex items-center justify-center min-w-[300px] min-h-full">' +
    '  <div>' +
    '    <a href="https://www.justwatch.com/" target="_blank">' +
    '      <img ngSrc="assets/img/justwatch-credits.png" alt="Logo of JustWatch" height="45" width="300"/>' +
    '    </a>' +
    '  </div>' +
    '</div>'
})
export class JustwatchCreditComponent {
}
