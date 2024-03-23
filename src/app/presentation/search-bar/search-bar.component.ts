import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { debounceTime, Subject } from "rxjs";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchTerm: string = '';
  inputChanged: Subject<void> = new Subject<void>();

  @Output() searchTermProvided = new EventEmitter<any>();

  public ngOnInit(): void {
    this.inputChanged.pipe(debounceTime(500))
      .subscribe(() => {
        this.searchTermProvided.emit(this.searchTerm);
      });
  }
}
