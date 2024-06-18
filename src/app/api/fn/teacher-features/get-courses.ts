/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageCourseResponse } from '../../models/page-course-response';

export interface GetCourses$Params {
  page?: number;
  size?: number;
}

export function getCourses(http: HttpClient, rootUrl: string, params?: GetCourses$Params, context?: HttpContext): Observable<StrictHttpResponse<PageCourseResponse>> {
  const rb = new RequestBuilder(rootUrl, getCourses.PATH, 'get');
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

getCourses.PATH = '/api/v1/teacher/course';
