/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageCourseResponse } from '../../models/page-course-response';

export interface EnrolledCourses$Params {
  page?: number;
  size?: number;
}

export function enrolledCourses(http: HttpClient, rootUrl: string, params?: EnrolledCourses$Params, context?: HttpContext): Observable<StrictHttpResponse<PageCourseResponse>> {
  const rb = new RequestBuilder(rootUrl, enrolledCourses.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageCourseResponse>;
    })
  );
}

enrolledCourses.PATH = '/api/v1/student/courses';
