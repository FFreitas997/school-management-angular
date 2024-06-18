/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EventResponse } from '../../models/event-response';

export interface GetFutureEvents$Params {
  schoolId: number;
}

export function getFutureEvents(http: HttpClient, rootUrl: string, params: GetFutureEvents$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EventResponse>>> {
  const rb = new RequestBuilder(rootUrl, getFutureEvents.PATH, 'get');
  if (params) {
    rb.path('schoolId', params.schoolId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<EventResponse>>;
    })
  );
}

getFutureEvents.PATH = '/api/v1/school/{schoolId}/events/future';
