/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { StudentResponse } from '../../models/student-response';

export interface GetStudentForParent$Params {
}

export function getStudentForParent(http: HttpClient, rootUrl: string, params?: GetStudentForParent$Params, context?: HttpContext): Observable<StrictHttpResponse<StudentResponse>> {
  const rb = new RequestBuilder(rootUrl, getStudentForParent.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<StudentResponse>;
    })
  );
}

getStudentForParent.PATH = '/api/v1/parent/student';
