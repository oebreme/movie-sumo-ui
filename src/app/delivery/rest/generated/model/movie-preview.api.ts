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


export interface MoviePreview { 
    externalId: number;
    title: string;
    posterImageUrl: string;
    /**
     * first release of the movie anywhere in the world
     */
    releaseDate: string;
    genres: Array<string>;
}
