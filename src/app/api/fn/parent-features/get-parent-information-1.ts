/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ParentResponse } from '../../models/parent-response';

export interface GetParentInformation1$Params {
}

export function getParentInformation1(http: HttpClient, rootUrl: string, params?: GetParentInformation1$Params, context?: HttpContext): Observable<StrictHttpResponse<ParentResponse>> {
  const rb = new RequestBuilder(rootUrl, getParentInformation1.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<ParentResponse>;
    })
  );
}

getParentInformation1.PATH = '/api/v1/parent';
