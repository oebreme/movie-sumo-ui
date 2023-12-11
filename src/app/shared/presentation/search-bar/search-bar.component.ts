import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { debounceTime, Subject } from "rxjs";
import { SearchService } from "../../delivery/search.service";
import { SearchResult } from "../../domain/search-result.model";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  userInput: string = '';
  inputSubject: Subject<void> = new Subject<void>();

  isLoading: boolean = false;

  result?: SearchResult[];

  @Output() outputResult = new EventEmitter<any>();

  constructor(private readonly searchService: SearchService) {
  }

  public ngOnInit(): void {
    console.log('ngOnInit called at ~~~ ' + new Date().toLocaleString());
    this.inputSubject.subscribe(() => {
      this.isLoading = true
    });
    this.inputSubject.pipe(debounceTime(500))
      .subscribe(() => {
        console.log('called API ~~~ ' + new Date().toLocaleString());
        this.callTmdb();
      })
  }

  private onInput(): void {
    this.outputResult.emit(this.result);
  }

  private callTmdb(): void {
    this.searchService.getSearchResult(this.userInput).subscribe((data) => {
      this.result = data;
      this.isLoading = false;
      console.log(data);
    });
  }
}
