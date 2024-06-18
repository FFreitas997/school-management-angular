/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AssignmentResponse } from '../../models/assignment-response';

export interface GetFutureAssignments$Params {
}

export function getFutureAssignments(http: HttpClient, rootUrl: string, params?: GetFutureAssignments$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AssignmentResponse>>> {
  const rb = new RequestBuilder(rootUrl, getFutureAssignments.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<AssignmentResponse>>;
    })
  );
}

getFutureAssignments.PATH = '/api/v1/student/assignments/future';
