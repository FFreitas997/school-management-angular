/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageAssignmentResponse } from '../../models/page-assignment-response';

export interface GetAssignmentsByCourseAndDelivery$Params {
  courseCode: string;
  delivery: string;
  page?: number;
  size?: number;
}

export function getAssignmentsByCourseAndDelivery(http: HttpClient, rootUrl: string, params: GetAssignmentsByCourseAndDelivery$Params, context?: HttpContext): Observable<StrictHttpResponse<PageAssignmentResponse>> {
  const rb = new RequestBuilder(rootUrl, getAssignmentsByCourseAndDelivery.PATH, 'get');
  if (params) {
    rb.query('courseCode', params.courseCode, {});
    rb.query('delivery', params.delivery, {});
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageAssignmentResponse>;
    })
  );
}

getAssignmentsByCourseAndDelivery.PATH = '/api/v1/teacher/assignment';
