export interface SearchResultResponseDto {
    results: SingleSearchResultResponseDto[],
}

declare interface SingleSearchResultResponseDto {
    "id": number,
    "title": string,
    "release_date": string,
    "backdrop_path": string,
    "poster_path": string,
    "genre_ids": number[],
    "adult": boolean,
    "original_language": string,
    "original_title": string,
    "overview": string,
    "popularity": number,
    "video": boolean,
    "vote_average": number,
    "vote_count": number
}
