/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseCourse } from '../../models/page-response-course';

export interface GetCourses1$Params {
  page?: number;
  size?: number;
}

export function getCourses1(http: HttpClient, rootUrl: string, params?: GetCourses1$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseCourse>> {
  const rb = new RequestBuilder(rootUrl, getCourses1.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseCourse>;
    })
  );
}

getCourses1.PATH = '/api/v1/admin/courses';
