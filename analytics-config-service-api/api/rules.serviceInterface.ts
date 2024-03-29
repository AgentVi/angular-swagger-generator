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
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { AnalyticsConfigApiV2GetRuleSpecResponse } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface RulesServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * Get the available rules for this Account (and, optionally, the specified Sensor).
     * 
     * @param sensorId Optionally limit the response to what is available for the Sensor with the specified ID.
     * @param language Optionally specify which language to use for returned human-readable texts. Only applicable when \&#39;responseFields\&#39; param contains \&#39;uiInfo\&#39;
     * @param responseFields Comma-separated list of fields to include in response. By default, no fields will be populated.
     */
    v2RulesSpecGet(sensorId?: string, language?: 'en-US' | 'es-ES' | 'fr-FR' | 'ja-JP' | 'de-DE' | 'ru-RU' | 'hi-IN' | 'zh-CN', responseFields?: Array<'rules' | 'attributes' | 'uiInfo'>, extraHttpRequestParams?: any): Observable<AnalyticsConfigApiV2GetRuleSpecResponse>;

}
