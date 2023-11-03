import { TestBed } from '@angular/core/testing';

import { MovieMapperService } from './movie-mapper.service';

describe('MovieMapperService', () => {
  let service: MovieMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
