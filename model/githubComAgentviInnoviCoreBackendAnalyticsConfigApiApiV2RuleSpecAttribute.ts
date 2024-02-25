/**
 * Analytics Configuration Service API
 * Analytics Configuration Service is responsible for everything related to management of rules, schedules, sensor configurations and models.
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface GithubComAgentviInnoviCoreBackendAnalyticsConfigApiApiV2RuleSpecAttribute { 
    /**
     * The id of the mode (include/exclude) that is selected by default
     */
    defaultMode?: string;
    /**
     * The attribute id
     */
    id?: string;
    /**
     * Available object types for this attribute
     */
    objectTypes?: Array<number>;
    /**
     * The available value ids for this attribute
     */
    values?: Array<string>;
}
