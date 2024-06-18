/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AssociateTextBookToCourse$Params {
  courseCode: string;
  textBookISBN: string;
}

export function associateTextBookToCourse(http: HttpClient, rootUrl: string, params: AssociateTextBookToCourse$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, associateTextBookToCourse.PATH, 'patch');
  if (params) {
    rb.query('courseCode', params.courseCode, {});
    rb.query('textBookISBN', params.textBookISBN, {});
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

associateTextBookToCourse.PATH = '/api/v1/teacher/course/textbook';
