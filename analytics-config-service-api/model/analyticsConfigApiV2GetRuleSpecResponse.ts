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
import { AnalyticsConfigApiV2RuleSpecUiInfo } from './analyticsConfigApiV2RuleSpecUiInfo';
import { AnalyticsConfigApiV2RuleSpecRule } from './analyticsConfigApiV2RuleSpecRule';
import { AnalyticsConfigApiV2RuleSpecAttribute } from './analyticsConfigApiV2RuleSpecAttribute';


export interface AnalyticsConfigApiV2GetRuleSpecResponse { 
    attributes?: Array<AnalyticsConfigApiV2RuleSpecAttribute>;
    rules?: Array<AnalyticsConfigApiV2RuleSpecRule>;
    uiInfo?: AnalyticsConfigApiV2RuleSpecUiInfo;
}

