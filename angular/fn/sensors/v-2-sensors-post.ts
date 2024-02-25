/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CreateSensorRequest as GithubComAgentviInnoviCoreBackendAnalyticsConfigApiApiV2CreateSensorRequest } from '../../models/github_com_agentvi_innovi-core-backend_analytics-config_api_api_v2/create-sensor-request';

export interface V2SensorsPost$Params {

/**
 *
 */
  request: GithubComAgentviInnoviCoreBackendAnalyticsConfigApiApiV2CreateSensorRequest;
}

export function v2SensorsPost(http: HttpClient, rootUrl: string, params: V2SensorsPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, v2SensorsPost.PATH, 'post');
  if (params) {
    rb.body('request', params.request, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

v2SensorsPost.PATH = '/v2/sensors';
