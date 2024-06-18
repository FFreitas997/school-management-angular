/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageStudentResponse } from '../../models/page-student-response';

export interface GetStudentsByCourse$Params {
  courseCode: string;
  page?: number;
  size?: number;
}

export function getStudentsByCourse(http: HttpClient, rootUrl: string, params: GetStudentsByCourse$Params, context?: HttpContext): Observable<StrictHttpResponse<PageStudentResponse>> {
  const rb = new RequestBuilder(rootUrl, getStudentsByCourse.PATH, 'get');
  if (params) {
    rb.path('courseCode', params.courseCode, {});
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageStudentResponse>;
    })
  );
}

getStudentsByCourse.PATH = '/api/v1/teacher/course/{courseCode}/student';
