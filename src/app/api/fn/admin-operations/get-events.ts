/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageEventResponse } from '../../models/page-event-response';

export interface GetEvents$Params {
  schoolId: number;
  page?: number;
  size?: number;
}

export function getEvents(http: HttpClient, rootUrl: string, params: GetEvents$Params, context?: HttpContext): Observable<StrictHttpResponse<PageEventResponse>> {
  const rb = new RequestBuilder(rootUrl, getEvents.PATH, 'get');
  if (params) {
    rb.query('schoolId', params.schoolId, {});
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageEventResponse>;
    })
  );
}

getEvents.PATH = '/api/v1/admin/events';
