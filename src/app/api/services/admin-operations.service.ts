/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { AdminResponse } from '../models/admin-response';
import { associateTeacherToCourse } from '../fn/admin-operations/associate-teacher-to-course';
import { AssociateTeacherToCourse$Params } from '../fn/admin-operations/associate-teacher-to-course';
import { createCourse } from '../fn/admin-operations/create-course';
import { CreateCourse$Params } from '../fn/admin-operations/create-course';
import { createEvent } from '../fn/admin-operations/create-event';
import { CreateEvent$Params } from '../fn/admin-operations/create-event';
import { createSchool } from '../fn/admin-operations/create-school';
import { CreateSchool$Params } from '../fn/admin-operations/create-school';
import { getAdminInformation } from '../fn/admin-operations/get-admin-information';
import { GetAdminInformation$Params } from '../fn/admin-operations/get-admin-information';
import { getCourses1 } from '../fn/admin-operations/get-courses-1';
import { GetCourses1$Params } from '../fn/admin-operations/get-courses-1';
import { getEvents } from '../fn/admin-operations/get-events';
import { GetEvents$Params } from '../fn/admin-operations/get-events';
import { getParents } from '../fn/admin-operations/get-parents';
import { GetParents$Params } from '../fn/admin-operations/get-parents';
import { getSchools1 } from '../fn/admin-operations/get-schools-1';
import { GetSchools1$Params } from '../fn/admin-operations/get-schools-1';
import { getStudents } from '../fn/admin-operations/get-students';
import { GetStudents$Params } from '../fn/admin-operations/get-students';
import { getTeachers } from '../fn/admin-operations/get-teachers';
import { GetTeachers$Params } from '../fn/admin-operations/get-teachers';
import { PageEventResponse } from '../models/page-event-response';
import { PageResponseCourse } from '../models/page-response-course';
import { PageResponseParent } from '../models/page-response-parent';
import { PageResponseStudent } from '../models/page-response-student';
import { PageResponseTeacher } from '../models/page-response-teacher';
import { register1 } from '../fn/admin-operations/register-1';
import { Register1$Params } from '../fn/admin-operations/register-1';
import { SchoolResponse } from '../models/school-response';


/**
 * These operations are specific to admin users
 */
@Injectable({ providedIn: 'root' })
export class AdminOperationsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `createSchool()` */
  static readonly CreateSchoolPath = '/api/v1/admin/school';

  /**
   * Create School.
   *
   * Create a new school.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createSchool()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSchool$Response(params: CreateSchool$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return createSchool(this.http, this.rootUrl, params, context);
  }

  /**
   * Create School.
   *
   * Create a new school.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createSchool$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSchool(params: CreateSchool$Params, context?: HttpContext): Observable<void> {
    return this.createSchool$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `register1()` */
  static readonly Register1Path = '/api/v1/admin/register';

  /**
   * Register User.
   *
   * Register a new admin user with the provided details.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register1$Response(params: Register1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return register1(this.http, this.rootUrl, params, context);
  }

  /**
   * Register User.
   *
   * Register a new admin user with the provided details.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `register1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register1(params: Register1$Params, context?: HttpContext): Observable<void> {
    return this.register1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createEvent()` */
  static readonly CreateEventPath = '/api/v1/admin/event';

  /**
   * Create Event.
   *
   * Create a new event.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createEvent()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createEvent$Response(params: CreateEvent$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return createEvent(this.http, this.rootUrl, params, context);
  }

  /**
   * Create Event.
   *
   * Create a new event.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createEvent$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createEvent(params: CreateEvent$Params, context?: HttpContext): Observable<void> {
    return this.createEvent$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createCourse()` */
  static readonly CreateCoursePath = '/api/v1/admin/course';

  /**
   * Create Course.
   *
   * Create a new course.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCourse()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCourse$Response(params: CreateCourse$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return createCourse(this.http, this.rootUrl, params, context);
  }

  /**
   * Create Course.
   *
   * Create a new course.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createCourse$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCourse(params: CreateCourse$Params, context?: HttpContext): Observable<void> {
    return this.createCourse$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `associateTeacherToCourse()` */
  static readonly AssociateTeacherToCoursePath = '/api/v1/admin/course/associate';

  /**
   * Associate Teacher to Course.
   *
   * Associate a teacher to a course.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `associateTeacherToCourse()` instead.
   *
   * This method doesn't expect any request body.
   */
  associateTeacherToCourse$Response(params: AssociateTeacherToCourse$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return associateTeacherToCourse(this.http, this.rootUrl, params, context);
  }

  /**
   * Associate Teacher to Course.
   *
   * Associate a teacher to a course.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `associateTeacherToCourse$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  associateTeacherToCourse(params: AssociateTeacherToCourse$Params, context?: HttpContext): Observable<void> {
    return this.associateTeacherToCourse$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAdminInformation()` */
  static readonly GetAdminInformationPath = '/api/v1/admin';

  /**
   * Administrator Information.
   *
   * Get information about the administrator.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAdminInformation()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdminInformation$Response(params?: GetAdminInformation$Params, context?: HttpContext): Observable<StrictHttpResponse<AdminResponse>> {
    return getAdminInformation(this.http, this.rootUrl, params, context);
  }

  /**
   * Administrator Information.
   *
   * Get information about the administrator.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAdminInformation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAdminInformation(params?: GetAdminInformation$Params, context?: HttpContext): Observable<AdminResponse> {
    return this.getAdminInformation$Response(params, context).pipe(
      map((r: StrictHttpResponse<AdminResponse>): AdminResponse => r.body)
    );
  }

  /** Path part for operation `getTeachers()` */
  static readonly GetTeachersPath = '/api/v1/admin/teachers';

  /**
   * Get Teachers.
   *
   * Get a list of teachers.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTeachers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeachers$Response(params?: GetTeachers$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseTeacher>> {
    return getTeachers(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Teachers.
   *
   * Get a list of teachers.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTeachers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeachers(params?: GetTeachers$Params, context?: HttpContext): Observable<PageResponseTeacher> {
    return this.getTeachers$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseTeacher>): PageResponseTeacher => r.body)
    );
  }

  /** Path part for operation `getStudents()` */
  static readonly GetStudentsPath = '/api/v1/admin/students';

  /**
   * Get Students.
   *
   * Get a list of students.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStudents()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStudents$Response(params?: GetStudents$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseStudent>> {
    return getStudents(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Students.
   *
   * Get a list of students.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getStudents$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStudents(params?: GetStudents$Params, context?: HttpContext): Observable<PageResponseStudent> {
    return this.getStudents$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseStudent>): PageResponseStudent => r.body)
    );
  }

  /** Path part for operation `getSchools1()` */
  static readonly GetSchools1Path = '/api/v1/admin/schools';

  /**
   * Get Schools.
   *
   * Get a list of schools.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSchools1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSchools1$Response(params?: GetSchools1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SchoolResponse>>> {
    return getSchools1(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Schools.
   *
   * Get a list of schools.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSchools1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSchools1(params?: GetSchools1$Params, context?: HttpContext): Observable<Array<SchoolResponse>> {
    return this.getSchools1$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SchoolResponse>>): Array<SchoolResponse> => r.body)
    );
  }

  /** Path part for operation `getParents()` */
  static readonly GetParentsPath = '/api/v1/admin/parents';

  /**
   * Get Parents.
   *
   * Get a list of parents.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getParents()` instead.
   *
   * This method doesn't expect any request body.
   */
  getParents$Response(params?: GetParents$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseParent>> {
    return getParents(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Parents.
   *
   * Get a list of parents.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getParents$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getParents(params?: GetParents$Params, context?: HttpContext): Observable<PageResponseParent> {
    return this.getParents$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseParent>): PageResponseParent => r.body)
    );
  }

  /** Path part for operation `getEvents()` */
  static readonly GetEventsPath = '/api/v1/admin/events';

  /**
   * Get Events.
   *
   * Get a list of events.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEvents()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEvents$Response(params: GetEvents$Params, context?: HttpContext): Observable<StrictHttpResponse<PageEventResponse>> {
    return getEvents(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Events.
   *
   * Get a list of events.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEvents$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEvents(params: GetEvents$Params, context?: HttpContext): Observable<PageEventResponse> {
    return this.getEvents$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageEventResponse>): PageEventResponse => r.body)
    );
  }

  /** Path part for operation `getCourses1()` */
  static readonly GetCourses1Path = '/api/v1/admin/courses';

  /**
   * Get Courses.
   *
   * Get a list of courses.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCourses1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCourses1$Response(params?: GetCourses1$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseCourse>> {
    return getCourses1(this.http, this.rootUrl, params, context);
  }

  /**
   * Get Courses.
   *
   * Get a list of courses.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCourses1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCourses1(params?: GetCourses1$Params, context?: HttpContext): Observable<PageResponseCourse> {
    return this.getCourses1$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseCourse>): PageResponseCourse => r.body)
    );
  }

}
