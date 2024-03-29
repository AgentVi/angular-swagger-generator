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

import { AnalyticsConfigApiV2FindAccountSettingsResponse } from '../model/models';
import { AnalyticsConfigApiV2GetAccountSettingsResponse } from '../model/models';
import { AnalyticsConfigApiV2UpdateAccountSettingsRequest } from '../model/models';
import { AnalyticsConfigApiV2UpdateAccountSettingsResponse } from '../model/models';


import { Configuration }                                     from '../configuration';



export interface AccountSettingsServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * Fetch the analytics settings for the specified Account.
     * Only callable by a user of type SysAdmin or Support.
     * @param accountId Account ID
     */
    v2AccountSettingsAccountIdGet(accountId: number, extraHttpRequestParams?: any): Observable<AnalyticsConfigApiV2GetAccountSettingsResponse>;

    /**
     * Fetch the analytics settings for the Account that the user is logged into.
     * 
     */
    v2AccountSettingsCurrentGet(extraHttpRequestParams?: any): Observable<AnalyticsConfigApiV2GetAccountSettingsResponse>;

    /**
     * Fetch analytics settings (currently for all) accounts.
     * 
     */
    v2AccountSettingsGet(extraHttpRequestParams?: any): Observable<AnalyticsConfigApiV2FindAccountSettingsResponse>;

    /**
     * Update analytics settings for an Account.
     * If the user is a SysAdmin or Support type, the AccountId can be specified in the request. Otherwise, the AccountId used is the one the user is logged into.
     * @param request 
     */
    v2AccountSettingsPatch(request: AnalyticsConfigApiV2UpdateAccountSettingsRequest, extraHttpRequestParams?: any): Observable<AnalyticsConfigApiV2UpdateAccountSettingsResponse>;

}
