import { TestBed } from '@angular/core/testing';

import { MovieMapperService } from './movie-mapper.service';
import {MovieDto} from "../delivery/rest/movie.dto";
import {Movie, MoviePreview} from "../domain/movie.model";

describe('MovieMapperService', () => {
  let service: MovieMapperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieMapperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('given a Dto', () => {

    test('with details, should mapFromApi', () => {
      const dto: MovieDto = {
        id: 400,
        title: 'input',
        imageUrl: 'url',
        genres: ['a', 'b'],
        details: {
          runtime: 120,
          releaseDate: '2023-11-03T22:03:48.611Z',
          overview: 'text',
          availableOn: [
            {
              name: 'Netflix',
              logoUrl: 'netflixUrl',
              displayOrder: 1
            },
            {
              name: 'Amazon Prime',
              logoUrl: 'primeUrl',
              displayOrder: 2
            },
          ]
        }
      };

      const expected: Movie = {
        id: 400,
        title: 'input',
        imageUrl: 'url',
        genres: ['a', 'b'],
        details: {
          runtime: 120,
          releaseDate: '2023-11-03T22:03:48.611Z',
          overview: 'text',
          availableOn: [
            {
              name: 'Netflix',
              logoUrl: 'netflixUrl',
              displayOrder: 1
            },
            {
              name: 'Amazon Prime',
              logoUrl: 'primeUrl',
              displayOrder: 2
            },
          ]
        }
      };

      const result = service.mapFromApi(dto);

      expect(result).toStrictEqual(expected);
    });

    test('with undefined details, should mapFromApi', () => {
      const dto: MovieDto = {
        id: 500,
        title: 'input',
        imageUrl: 'url',
        genres: ['a', 'b'],
        details: undefined
      };

      const expected: MoviePreview = {
        id: 500,
        title: 'input',
        imageUrl: 'url',
        genres: ['a', 'b']
      };

      const result = service.mapFromApi(dto);

      expect(result).toStrictEqual(expected);
    });

    test('without details, should mapFromApi', () => {
      const dto: MovieDto = {
        id: 600,
        title: 'input',
        imageUrl: 'url',
        genres: ['a', 'b']
      };

      const expected: MoviePreview = {
        id: 600,
        title: 'input',
        imageUrl: 'url',
        genres: ['a', 'b']
      };

      const result = service.mapFromApi(dto);

      expect(result).toStrictEqual(expected);
    });
  });
});
