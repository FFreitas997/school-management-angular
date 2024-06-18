/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AssignmentResponse } from '../models/assignment-response';
import { enrolledCourses } from '../fn/student-features/enrolled-courses';
import { EnrolledCourses$Params } from '../fn/student-features/enrolled-courses';
import { getAllAssignments } from '../fn/student-features/get-all-assignments';
import { GetAllAssignments$Params } from '../fn/student-features/get-all-assignments';
import { getFutureAssignments } from '../fn/student-features/get-future-assignments';
import { GetFutureAssignments$Params } from '../fn/student-features/get-future-assignments';
import { getParentInformation } from '../fn/student-features/get-parent-information';
import { GetParentInformation$Params } from '../fn/student-features/get-parent-information';
import { getStudentInformation } from '../fn/student-features/get-student-information';
import { GetStudentInformation$Params } from '../fn/student-features/get-student-information';
import { getTeacherResponsibleFor } from '../fn/student-features/get-teacher-responsible-for';
import { GetTeacherResponsibleFor$Params } from '../fn/student-features/get-teacher-responsible-for';
import { PageAssignmentResponse } from '../models/page-assignment-response';
import { PageCourseResponse } from '../models/page-course-response';
import { ParentResponse } from '../models/parent-response';
import { register } from '../fn/student-features/register';
import { Register$Params } from '../fn/student-features/register';
import { StudentInformation } from '../models/student-information';
import { TeacherResponse } from '../models/teacher-response';


/**
 * These operations are related to students.
 */
@Injectable({ providedIn: 'root' })
export class StudentFeaturesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getStudentInformation()` */
  static readonly GetStudentInformationPath = '/api/v1/student';

  /**
   * Get student information.
   *
   * This operation retrieves the student information.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStudentInformation()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStudentInformation$Response(params?: GetStudentInformation$Params, context?: HttpContext): Observable<StrictHttpResponse<StudentInformation>> {
    return getStudentInformation(this.http, this.rootUrl, params, context);
  }

  /**
   * Get student information.
   *
   * This operation retrieves the student information.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getStudentInformation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStudentInformation(params?: GetStudentInformation$Params, context?: HttpContext): Observable<StudentInformation> {
    return this.getStudentInformation$Response(params, context).pipe(
      map((r: StrictHttpResponse<StudentInformation>): StudentInformation => r.body)
    );
  }

  /** Path part for operation `register()` */
  static readonly RegisterPath = '/api/v1/student';

  /**
   * Register a student.
   *
   * This operation registers a student.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register$Response(params: Register$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return register(this.http, this.rootUrl, params, context);
  }

  /**
   * Register a student.
   *
   * This operation registers a student.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `register$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register(params: Register$Params, context?: HttpContext): Observable<void> {
    return this.register$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getTeacherResponsibleFor()` */
  static readonly GetTeacherResponsibleForPath = '/api/v1/student/teacher';

  /**
   * Get teacher responsible for.
   *
   * This operation retrieves the teacher responsible for the student.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTeacherResponsibleFor()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeacherResponsibleFor$Response(params?: GetTeacherResponsibleFor$Params, context?: HttpContext): Observable<StrictHttpResponse<TeacherResponse>> {
    return getTeacherResponsibleFor(this.http, this.rootUrl, params, context);
  }

  /**
   * Get teacher responsible for.
   *
   * This operation retrieves the teacher responsible for the student.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTeacherResponsibleFor$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeacherResponsibleFor(params?: GetTeacherResponsibleFor$Params, context?: HttpContext): Observable<TeacherResponse> {
    return this.getTeacherResponsibleFor$Response(params, context).pipe(
      map((r: StrictHttpResponse<TeacherResponse>): TeacherResponse => r.body)
    );
  }

  /** Path part for operation `getParentInformation()` */
  static readonly GetParentInformationPath = '/api/v1/student/parent';

  /**
   * Get parent information.
   *
   * This operation retrieves the student's parent information.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getParentInformation()` instead.
   *
   * This method doesn't expect any request body.
   */
  getParentInformation$Response(params?: GetParentInformation$Params, context?: HttpContext): Observable<StrictHttpResponse<ParentResponse>> {
    return getParentInformation(this.http, this.rootUrl, params, context);
  }

  /**
   * Get parent information.
   *
   * This operation retrieves the student's parent information.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getParentInformation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getParentInformation(params?: GetParentInformation$Params, context?: HttpContext): Observable<ParentResponse> {
    return this.getParentInformation$Response(params, context).pipe(
      map((r: StrictHttpResponse<ParentResponse>): ParentResponse => r.body)
    );
  }

  /** Path part for operation `enrolledCourses()` */
  static readonly EnrolledCoursesPath = '/api/v1/student/courses';

  /**
   * Get enrolled courses.
   *
   * This operation retrieves the courses in which the student is enrolled.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `enrolledCourses()` instead.
   *
   * This method doesn't expect any request body.
   */
  enrolledCourses$Response(params?: EnrolledCourses$Params, context?: HttpContext): Observable<StrictHttpResponse<PageCourseResponse>> {
    return enrolledCourses(this.http, this.rootUrl, params, context);
  }

  /**
   * Get enrolled courses.
   *
   * This operation retrieves the courses in which the student is enrolled.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `enrolledCourses$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  enrolledCourses(params?: EnrolledCourses$Params, context?: HttpContext): Observable<PageCourseResponse> {
    return this.enrolledCourses$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageCourseResponse>): PageCourseResponse => r.body)
    );
  }

  /** Path part for operation `getAllAssignments()` */
  static readonly GetAllAssignmentsPath = '/api/v1/student/assignments';

  /**
   * Get all assignments.
   *
   * This operation retrieves all student assignments.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllAssignments()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllAssignments$Response(params?: GetAllAssignments$Params, context?: HttpContext): Observable<StrictHttpResponse<PageAssignmentResponse>> {
    return getAllAssignments(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all assignments.
   *
   * This operation retrieves all student assignments.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllAssignments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllAssignments(params?: GetAllAssignments$Params, context?: HttpContext): Observable<PageAssignmentResponse> {
    return this.getAllAssignments$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageAssignmentResponse>): PageAssignmentResponse => r.body)
    );
  }

  /** Path part for operation `getFutureAssignments()` */
  static readonly GetFutureAssignmentsPath = '/api/v1/student/assignments/future';

  /**
   * Get future assignments.
   *
   * This operation retrieves the student's future assignments.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFutureAssignments()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFutureAssignments$Response(params?: GetFutureAssignments$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<AssignmentResponse>>> {
    return getFutureAssignments(this.http, this.rootUrl, params, context);
  }

  /**
   * Get future assignments.
   *
   * This operation retrieves the student's future assignments.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFutureAssignments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFutureAssignments(params?: GetFutureAssignments$Params, context?: HttpContext): Observable<Array<AssignmentResponse>> {
    return this.getFutureAssignments$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<AssignmentResponse>>): Array<AssignmentResponse> => r.body)
    );
  }

}
