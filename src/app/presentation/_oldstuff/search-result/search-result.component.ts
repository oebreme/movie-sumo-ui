import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  standalone: true,
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  // @Input() movie!: SearchResult;
  @Output() addToList = new EventEmitter<number>();

  // public onClick(): void {
  //   this.addToList.emit(this.movie.id);
  // }
}
