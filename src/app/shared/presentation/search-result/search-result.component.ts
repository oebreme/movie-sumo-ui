import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { SearchResult } from "../../domain/search-result.model";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  @Input() movie!: SearchResult;
  @Output() addToList = new EventEmitter<number>();

  public onClick(): void {
    this.addToList.emit(this.movie.id);
  }
}
