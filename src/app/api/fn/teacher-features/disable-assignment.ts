/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface DisableAssignment$Params {
  courseCode: string;
  delivery: string;
}

export function disableAssignment(http: HttpClient, rootUrl: string, params: DisableAssignment$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, disableAssignment.PATH, 'delete');
  if (params) {
    rb.query('courseCode', params.courseCode, {});
    rb.query('delivery', params.delivery, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
    })
  );
}

disableAssignment.PATH = '/api/v1/teacher/assignment';
