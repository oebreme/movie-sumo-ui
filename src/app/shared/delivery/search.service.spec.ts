import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { SharedModule } from "../shared.module";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
