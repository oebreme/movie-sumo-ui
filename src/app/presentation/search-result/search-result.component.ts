import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.a.html',
  styleUrls: ['./search-result.component.scss']
})
export class rSearchResultComponent {
  // @Input() movie!: SearchResult;
  @Output() addToList = new EventEmitter<number>();

  // public onClick(): void {
  //   this.addToList.emit(this.movie.id);
  // }
}
