/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { associateStudentForParent } from '../fn/parent-features/associate-student-for-parent';
import { AssociateStudentForParent$Params } from '../fn/parent-features/associate-student-for-parent';
import { getParentInformation1 } from '../fn/parent-features/get-parent-information-1';
import { GetParentInformation1$Params } from '../fn/parent-features/get-parent-information-1';
import { getStudentForParent } from '../fn/parent-features/get-student-for-parent';
import { GetStudentForParent$Params } from '../fn/parent-features/get-student-for-parent';
import { ParentResponse } from '../models/parent-response';
import { registerParent } from '../fn/parent-features/register-parent';
import { RegisterParent$Params } from '../fn/parent-features/register-parent';
import { StudentResponse } from '../models/student-response';


/**
 * These operations are related to the parent of the student.
 */
@Injectable({ providedIn: 'root' })
export class ParentFeaturesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getParentInformation1()` */
  static readonly GetParentInformation1Path = '/api/v1/parent';

  /**
   * Parent Information.
   *
   * This operation is used to get the parent information.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getParentInformation1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getParentInformation1$Response(params?: GetParentInformation1$Params, context?: HttpContext): Observable<StrictHttpResponse<ParentResponse>> {
    return getParentInformation1(this.http, this.rootUrl, params, context);
  }

  /**
   * Parent Information.
   *
   * This operation is used to get the parent information.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getParentInformation1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getParentInformation1(params?: GetParentInformation1$Params, context?: HttpContext): Observable<ParentResponse> {
    return this.getParentInformation1$Response(params, context).pipe(
      map((r: StrictHttpResponse<ParentResponse>): ParentResponse => r.body)
    );
  }

  /** Path part for operation `registerParent()` */
  static readonly RegisterParentPath = '/api/v1/parent';

  /**
   * Register a parent.
   *
   * This operation is used to register a parent.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerParent()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerParent$Response(params: RegisterParent$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return registerParent(this.http, this.rootUrl, params, context);
  }

  /**
   * Register a parent.
   *
   * This operation is used to register a parent.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registerParent$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerParent(params: RegisterParent$Params, context?: HttpContext): Observable<void> {
    return this.registerParent$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getStudentForParent()` */
  static readonly GetStudentForParentPath = '/api/v1/parent/student';

  /**
   * Get student information.
   *
   * This operation is used to get the student information.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStudentForParent()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStudentForParent$Response(params?: GetStudentForParent$Params, context?: HttpContext): Observable<StrictHttpResponse<StudentResponse>> {
    return getStudentForParent(this.http, this.rootUrl, params, context);
  }

  /**
   * Get student information.
   *
   * This operation is used to get the student information.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getStudentForParent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStudentForParent(params?: GetStudentForParent$Params, context?: HttpContext): Observable<StudentResponse> {
    return this.getStudentForParent$Response(params, context).pipe(
      map((r: StrictHttpResponse<StudentResponse>): StudentResponse => r.body)
    );
  }

  /** Path part for operation `associateStudentForParent()` */
  static readonly AssociateStudentForParentPath = '/api/v1/parent/student';

  /**
   * Associate a student.
   *
   * This operation is used to associate a student to a parent.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `associateStudentForParent()` instead.
   *
   * This method doesn't expect any request body.
   */
  associateStudentForParent$Response(params: AssociateStudentForParent$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return associateStudentForParent(this.http, this.rootUrl, params, context);
  }

  /**
   * Associate a student.
   *
   * This operation is used to associate a student to a parent.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `associateStudentForParent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  associateStudentForParent(params: AssociateStudentForParent$Params, context?: HttpContext): Observable<void> {
    return this.associateStudentForParent$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
