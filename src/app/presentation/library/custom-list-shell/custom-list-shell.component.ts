import { Component } from '@angular/core';

@Component({
  selector: 'moviesumo-custom-list-shell',
  standalone: true,
  imports: [],
  templateUrl: './custom-list-shell.component.html'
})
export class CustomListShellComponent {
  customMovieLists = Array.from({length: 8});

  onClickEditCustomList(num: number): void {
    console.log(`[TODO] Edit Custom List ${num} has been clicked`);
  }
}
