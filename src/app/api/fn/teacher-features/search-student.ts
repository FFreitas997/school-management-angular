/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageStudentResponse } from '../../models/page-student-response';

export interface SearchStudent$Params {
  firstName?: string;
  lastName?: string;
  email?: string;
  page?: number;
  size?: number;
}

export function searchStudent(http: HttpClient, rootUrl: string, params?: SearchStudent$Params, context?: HttpContext): Observable<StrictHttpResponse<PageStudentResponse>> {
  const rb = new RequestBuilder(rootUrl, searchStudent.PATH, 'get');
  if (params) {
    rb.query('firstName', params.firstName, {});
    rb.query('lastName', params.lastName, {});
    rb.query('email', params.email, {});
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

searchStudent.PATH = '/api/v1/teacher/student/search';
