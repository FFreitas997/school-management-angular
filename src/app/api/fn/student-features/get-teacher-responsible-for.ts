/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TeacherResponse } from '../../models/teacher-response';

export interface GetTeacherResponsibleFor$Params {
}

export function getTeacherResponsibleFor(http: HttpClient, rootUrl: string, params?: GetTeacherResponsibleFor$Params, context?: HttpContext): Observable<StrictHttpResponse<TeacherResponse>> {
  const rb = new RequestBuilder(rootUrl, getTeacherResponsibleFor.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<TeacherResponse>;
    })
  );
}

getTeacherResponsibleFor.PATH = '/api/v1/student/teacher';
