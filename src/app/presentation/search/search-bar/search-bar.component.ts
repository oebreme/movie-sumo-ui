import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Subject, debounceTime } from "rxjs";

@Component({
  selector: 'moviesumo-search-bar',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent implements OnInit {

  searchTerm: string = '';
  inputChanged: Subject<void> = new Subject<void>();

  @Output() searchTermChanged = new EventEmitter<string>();

  public ngOnInit(): void {
    this.inputChanged.pipe(debounceTime(500))
      .subscribe(() => {
        this.searchTermChanged.emit(this.searchTerm);
      });
  }
}
