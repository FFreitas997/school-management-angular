/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseStudent } from '../../models/page-response-student';

export interface GetStudents$Params {
  page?: number;
  size?: number;
}

export function getStudents(http: HttpClient, rootUrl: string, params?: GetStudents$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseStudent>> {
  const rb = new RequestBuilder(rootUrl, getStudents.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseStudent>;
    })
  );
}

getStudents.PATH = '/api/v1/admin/students';
