/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AssignmentResponse } from '../../models/assignment-response';

export interface GetAssignmentByCourseAndDeliveryAndStudent$Params {
  courseCode: string;
  delivery: string;
  studentID: number;
}

export function getAssignmentByCourseAndDeliveryAndStudent(http: HttpClient, rootUrl: string, params: GetAssignmentByCourseAndDeliveryAndStudent$Params, context?: HttpContext): Observable<StrictHttpResponse<AssignmentResponse>> {
  const rb = new RequestBuilder(rootUrl, getAssignmentByCourseAndDeliveryAndStudent.PATH, 'get');
  if (params) {
    rb.path('courseCode', params.courseCode, {});
    rb.query('delivery', params.delivery, {});
    rb.path('studentID', params.studentID, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<AssignmentResponse>;
    })
  );
}

getAssignmentByCourseAndDeliveryAndStudent.PATH = '/api/v1/teacher/assignment/{courseCode}/{studentID}';
