import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SearchService } from "../delivery/rest/search/search.service";
import { SearchResultMapper } from "../delivery/rest/search/search-result-mapper.service";
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    TruncatePipe
  ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [
    SearchService,
    SearchResultMapper
  ]
})
export class SharedModule {
}
