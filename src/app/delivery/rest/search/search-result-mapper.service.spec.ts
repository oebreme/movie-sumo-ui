import { TestBed } from '@angular/core/testing';

import { SearchResultMapper } from './search-result-mapper.service';
import { SharedModule } from "../../../shared/shared.module";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('SearchResultMapperService', () => {
  let service: SearchResultMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(SearchResultMapper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
