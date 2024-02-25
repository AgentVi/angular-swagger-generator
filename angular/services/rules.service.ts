/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { v2RulesSpecGet } from '../fn/rules/v-2-rules-spec-get';
import { V2RulesSpecGet$Params } from '../fn/rules/v-2-rules-spec-get';

@Injectable({ providedIn: 'root' })
export class RulesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `v2RulesSpecGet()` */
  static readonly V2RulesSpecGetPath = '/v2/rules/spec';

  /**
   * Get the available rules for this Account (and, optionally, the specified Sensor).
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v2RulesSpecGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  v2RulesSpecGet$Response(params?: V2RulesSpecGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return v2RulesSpecGet(this.http, this.rootUrl, params, context);
  }

  /**
   * Get the available rules for this Account (and, optionally, the specified Sensor).
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `v2RulesSpecGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  v2RulesSpecGet(params?: V2RulesSpecGet$Params, context?: HttpContext): Observable<void> {
    return this.v2RulesSpecGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
