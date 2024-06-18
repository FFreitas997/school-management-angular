/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TextBookResponse } from '../../models/text-book-response';

export interface GetTextBookInformation$Params {
  courseCode: string;
}

export function getTextBookInformation(http: HttpClient, rootUrl: string, params: GetTextBookInformation$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TextBookResponse>>> {
  const rb = new RequestBuilder(rootUrl, getTextBookInformation.PATH, 'get');
  if (params) {
    rb.path('courseCode', params.courseCode, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TextBookResponse>>;
    })
  );
}

getTextBookInformation.PATH = '/api/v1/teacher/course/{courseCode}/textbook';
