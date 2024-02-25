/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface V2RulesSpecGet$Params {

/**
 * Optionally limit the response to what is available for the Sensor with the specified ID.
 */
  sensorId?: any;

/**
 * Optionally specify which language to use for returned human-readable texts. Only applicable when 'responseFields' param contains 'ui'
 */
  language?: any;

/**
 * Comma-separated list of fields to include in response. By default, no fields will be populated.
 */
  responseFields?: any;
}

export function v2RulesSpecGet(http: HttpClient, rootUrl: string, params?: V2RulesSpecGet$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, v2RulesSpecGet.PATH, 'get');
  if (params) {
    rb.query('sensorId', params.sensorId, {});
    rb.query('language', params.language, {});
    rb.query('responseFields', params.responseFields, {});
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

v2RulesSpecGet.PATH = '/v2/rules/spec';
