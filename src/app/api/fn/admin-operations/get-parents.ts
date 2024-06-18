/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseParent } from '../../models/page-response-parent';

export interface GetParents$Params {
  page?: number;
  size?: number;
}

export function getParents(http: HttpClient, rootUrl: string, params?: GetParents$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseParent>> {
  const rb = new RequestBuilder(rootUrl, getParents.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseParent>;
    })
  );
}

getParents.PATH = '/api/v1/admin/parents';
