import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './presentation/search-bar/search-bar.component';
import { FormsModule } from "@angular/forms";
import { SearchService } from "./delivery/search.service";
import { SearchResultMapper } from "./data/search-result-mapper.service";
import { SearchResultComponent } from './presentation/search-result/search-result.component';
import { TruncatePipe } from './data/truncate.pipe';

@NgModule({
  declarations: [
    SearchBarComponent,
    SearchResultComponent,
    TruncatePipe
  ],
  exports: [
    SearchBarComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    SearchService,
    SearchResultMapper
  ]
})
export class SharedModule { }
