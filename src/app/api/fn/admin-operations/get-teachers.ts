/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseTeacher } from '../../models/page-response-teacher';

export interface GetTeachers$Params {
  page?: number;
  size?: number;
}

export function getTeachers(http: HttpClient, rootUrl: string, params?: GetTeachers$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseTeacher>> {
  const rb = new RequestBuilder(rootUrl, getTeachers.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseTeacher>;
    })
  );
}

getTeachers.PATH = '/api/v1/admin/teachers';
