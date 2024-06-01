import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SearchService } from "../delivery/rest/search/search.service";
import { SearchResultMapper } from "../delivery/rest/search/search-result-mapper.service";
import { TruncatePipe } from './pipes/truncate.pipe';
import { SearchBarComponent } from "../presentation/_oldstuff/search-bar/search-bar.component";
import { SearchResultComponent } from "../presentation/_oldstuff/search-result/search-result.component";

@NgModule({
  declarations: [
    SearchBarComponent,
    TruncatePipe
  ],
  exports: [
    SearchBarComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SearchResultComponent
  ],
  providers: [
    SearchService,
    SearchResultMapper
  ]
})
export class SharedModule { }
