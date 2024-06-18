/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';


export interface AssociateTeacherToCourse$Params {
  courseCode: string;
  teacherEmail: string;
}

export function associateTeacherToCourse(http: HttpClient, rootUrl: string, params: AssociateTeacherToCourse$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
  const rb = new RequestBuilder(rootUrl, associateTeacherToCourse.PATH, 'patch');
  if (params) {
    rb.query('courseCode', params.courseCode, {});
    rb.query('teacherEmail', params.teacherEmail, {});
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

associateTeacherToCourse.PATH = '/api/v1/admin/course/associate';
