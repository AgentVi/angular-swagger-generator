/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { v2AccountSettingsCurrentGet } from '../fn/account-settings/v-2-account-settings-current-get';
import { V2AccountSettingsCurrentGet$Params } from '../fn/account-settings/v-2-account-settings-current-get';
import { v2AccountSettingsGet } from '../fn/account-settings/v-2-account-settings-get';
import { V2AccountSettingsGet$Params } from '../fn/account-settings/v-2-account-settings-get';
import { v2AccountSettingsIdGet } from '../fn/account-settings/v-2-account-settings-id-get';
import { V2AccountSettingsIdGet$Params } from '../fn/account-settings/v-2-account-settings-id-get';
import { v2AccountSettingsPatch } from '../fn/account-settings/v-2-account-settings-patch';
import { V2AccountSettingsPatch$Params } from '../fn/account-settings/v-2-account-settings-patch';

@Injectable({ providedIn: 'root' })
export class AccountSettingsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `v2AccountSettingsGet()` */
  static readonly V2AccountSettingsGetPath = '/v2/account-settings';

  /**
   * Fetch analytics settings (currently for all) accounts.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v2AccountSettingsGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  v2AccountSettingsGet$Response(params?: V2AccountSettingsGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return v2AccountSettingsGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Fetch analytics settings (currently for all) accounts.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `v2AccountSettingsGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  v2AccountSettingsGet(params?: V2AccountSettingsGet$Params, context?: HttpContext): Observable<void> {
    return this.v2AccountSettingsGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `v2AccountSettingsPatch()` */
  static readonly V2AccountSettingsPatchPath = '/v2/account-settings';

  /**
   * Update analytics settings for an Account.
   *
   * If the user is a SysAdmin or Support type, the AccountId can be specified in the request. Otherwise, the AccountId used is the one the user is logged into.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v2AccountSettingsPatch()` instead.
   *
   * This method doesn't expect any request body.
   */
  v2AccountSettingsPatch$Response(params: V2AccountSettingsPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return v2AccountSettingsPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * Update analytics settings for an Account.
   *
   * If the user is a SysAdmin or Support type, the AccountId can be specified in the request. Otherwise, the AccountId used is the one the user is logged into.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `v2AccountSettingsPatch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  v2AccountSettingsPatch(params: V2AccountSettingsPatch$Params, context?: HttpContext): Observable<void> {
    return this.v2AccountSettingsPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `v2AccountSettingsIdGet()` */
  static readonly V2AccountSettingsIdGetPath = '/v2/account-settings/:id';

  /**
   * Fetch the analytics settings for the specified Account.
   *
   * Only callable by a user of type SysAdmin or Support.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v2AccountSettingsIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  v2AccountSettingsIdGet$Response(params?: V2AccountSettingsIdGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return v2AccountSettingsIdGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Fetch the analytics settings for the specified Account.
   *
   * Only callable by a user of type SysAdmin or Support.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `v2AccountSettingsIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  v2AccountSettingsIdGet(params?: V2AccountSettingsIdGet$Params, context?: HttpContext): Observable<void> {
    return this.v2AccountSettingsIdGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `v2AccountSettingsCurrentGet()` */
  static readonly V2AccountSettingsCurrentGetPath = '/v2/account-settings/current';

  /**
   * Fetch the analytics settings for the Account that the user is logged into.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v2AccountSettingsCurrentGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  v2AccountSettingsCurrentGet$Response(params?: V2AccountSettingsCurrentGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return v2AccountSettingsCurrentGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Fetch the analytics settings for the Account that the user is logged into.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `v2AccountSettingsCurrentGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  v2AccountSettingsCurrentGet(params?: V2AccountSettingsCurrentGet$Params, context?: HttpContext): Observable<void> {
    return this.v2AccountSettingsCurrentGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
