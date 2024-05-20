import { TestBed } from '@angular/core/testing';

import { MovieMapperService } from './movie-mapper.service';
import { MovieDto } from "./movie.dto";
import { Movie } from "../../../domain/model/movie/movie.model";

describe('MovieMapperService', () => {
  let service: MovieMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('given a MovieDto', () => {

    test('should mapFromApi', () => {
      const dto: MovieDto = {
        movieId: '400',
        externalId: 15011,
        title: 'input',
        posterImageUrl: 'url',
        genres: ['a', 'b'],
        details: {
          runtime: 120,
          releaseDate: '2023-11-03T22:03:48.611Z',
          overview: 'text',
          availableOn: {
            providers: [
              {
                externalId: 1,
                name: 'Netflix',
                logoUrl: 'netflixUrl',
                displayOrder: 1
              },
              {
                externalId: 2,
                name: 'Amazon Prime',
                logoUrl: 'primeUrl',
                displayOrder: 2
              },
            ]
          },
          ratingAverage: 102,
          ratingVoteCount: 500
        }
      };

      const expected: Movie = {
        movieId: '400',
        externalId: 15011,
        title: 'input',
        posterImageUrl: 'url',
        genres: ['a', 'b'],
        details: {
          runtime: 120,
          releaseDate: '2023-11-03T22:03:48.611Z',
          overview: 'text',
          availableOn: [
            {
              externalId: 1,
              name: 'Netflix',
              logoUrl: 'netflixUrl',
              displayOrder: 1
            },
            {
              externalId: 2,
              name: 'Amazon Prime',
              logoUrl: 'primeUrl',
              displayOrder: 2
            },
          ],
          ratingAverage: 102,
          ratingVoteCount: 500
        }
      };

      const result = service.mapFromApi(dto);

      expect(result).toStrictEqual(expected);
    });
  });
});
