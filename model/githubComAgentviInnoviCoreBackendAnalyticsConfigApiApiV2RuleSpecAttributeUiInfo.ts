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
import { GithubComAgentviInnoviCoreBackendAnalyticsConfigApiApiV2RuleSpecAttributeMode } from './githubComAgentviInnoviCoreBackendAnalyticsConfigApiApiV2RuleSpecAttributeMode';
import { GithubComAgentviInnoviCoreBackendAnalyticsConfigApiApiV2RuleSpecAttributeValueUiInfo } from './githubComAgentviInnoviCoreBackendAnalyticsConfigApiApiV2RuleSpecAttributeValueUiInfo';


export interface GithubComAgentviInnoviCoreBackendAnalyticsConfigApiApiV2RuleSpecAttributeUiInfo { 
    /**
     * Human-readable description of the attribute
     */
    description?: string;
    /**
     * The attribute id
     */
    id?: string;
    /**
     * UI info about the include/exclude modes
     */
    modes?: Array<GithubComAgentviInnoviCoreBackendAnalyticsConfigApiApiV2RuleSpecAttributeMode>;
    /**
     * Human-readable name of the attribute
     */
    name?: string;
    /**
     * UI info about the available attribute values
     */
    values?: Array<GithubComAgentviInnoviCoreBackendAnalyticsConfigApiApiV2RuleSpecAttributeValueUiInfo>;
}

