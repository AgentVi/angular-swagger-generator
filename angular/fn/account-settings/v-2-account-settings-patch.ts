/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { UpdateAccountSettingsRequest as GithubComAgentviInnoviCoreBackendAnalyticsConfigApiApiV2UpdateAccountSettingsRequest } from '../../models/github_com_agentvi_innovi-core-backend_analytics-config_api_api_v2/update-account-settings-request';

export interface V2AccountSettingsPatch$Params {

/**
 *
 */
  request: GithubComAgentviInnoviCoreBackendAnalyticsConfigApiApiV2UpdateAccountSettingsRequest;
}

export function v2AccountSettingsPatch(http: HttpClient, rootUrl: string, params: V2AccountSettingsPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, v2AccountSettingsPatch.PATH, 'patch');
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

v2AccountSettingsPatch.PATH = '/v2/account-settings';
