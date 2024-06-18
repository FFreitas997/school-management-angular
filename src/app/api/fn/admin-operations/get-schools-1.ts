/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { SchoolResponse } from '../../models/school-response';

export interface GetSchools1$Params {
}

export function getSchools1(http: HttpClient, rootUrl: string, params?: GetSchools1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SchoolResponse>>> {
  const rb = new RequestBuilder(rootUrl, getSchools1.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<SchoolResponse>>;
    })
  );
}

getSchools1.PATH = '/api/v1/admin/schools';
