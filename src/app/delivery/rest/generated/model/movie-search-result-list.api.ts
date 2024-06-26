/**
 * Movie Sumo API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.0.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { MoviePreview } from './movie-preview.api';


export interface MovieSearchResultList { 
    /**
     * current page of the paginated result
     */
    page: number;
    results: Array<MoviePreview>;
    /**
     * how many pages there are for this query
     */
    totalPages: number;
    totalResults: number;
}

