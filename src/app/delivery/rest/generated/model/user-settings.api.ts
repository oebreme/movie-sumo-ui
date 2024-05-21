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
import { SupportedLanguage } from './supported-language.api';
import { SupportedProvider } from './supported-provider.api';


export interface UserSettings { 
    /**
     * a list of Languages the user is able to understand
     */
    spokenLanguages: Array<SupportedLanguage>;
    /**
     * a list of StreamProviders the user is currently subscribed to
     */
    subscribedStreamProviders: Array<SupportedProvider>;
}
