/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { v2SensorsPost } from '../fn/sensors/v-2-sensors-post';
import { V2SensorsPost$Params } from '../fn/sensors/v-2-sensors-post';

@Injectable({ providedIn: 'root' })
export class SensorsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `v2SensorsPost()` */
  static readonly V2SensorsPostPath = '/v2/sensors';

  /**
   * Creates a new sensor.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `v2SensorsPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  v2SensorsPost$Response(params: V2SensorsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return v2SensorsPost(this.http, this.rootUrl, params, context);
  }

  /**
   * Creates a new sensor.
   *
   *
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `v2SensorsPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  v2SensorsPost(params: V2SensorsPost$Params, context?: HttpContext): Observable<void> {
    return this.v2SensorsPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
