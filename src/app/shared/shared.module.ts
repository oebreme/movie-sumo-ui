import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../presentation/search-bar/search-bar.component';
import { FormsModule } from "@angular/forms";
import { SearchService } from "../delivery/rest/search/search.service";
import { SearchResultMapper } from "../delivery/rest/search/search-result-mapper.service";
import { SearchResultComponent } from '../presentation/search-result/search-result.component';
import { TruncatePipe } from './pipes/truncate.pipe';

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
