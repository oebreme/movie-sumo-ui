import { TestBed } from '@angular/core/testing';

import { SearchResultMapper } from './search-result-mapper.service';

describe('SearchResultMapperService', () => {
  let service: SearchResultMapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchResultMapper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
