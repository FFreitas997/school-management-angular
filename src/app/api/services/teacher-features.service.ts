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
import { associateStudent } from '../fn/teacher-features/associate-student';
import { AssociateStudent$Params } from '../fn/teacher-features/associate-student';
import { associateStudentsToCourse } from '../fn/teacher-features/associate-students-to-course';
import { AssociateStudentsToCourse$Params } from '../fn/teacher-features/associate-students-to-course';
import { associateTextBookToCourse } from '../fn/teacher-features/associate-text-book-to-course';
import { AssociateTextBookToCourse$Params } from '../fn/teacher-features/associate-text-book-to-course';
import { CourseResponse } from '../models/course-response';
import { createAssignment } from '../fn/teacher-features/create-assignment';
import { CreateAssignment$Params } from '../fn/teacher-features/create-assignment';
import { createTextBook } from '../fn/teacher-features/create-text-book';
import { CreateTextBook$Params } from '../fn/teacher-features/create-text-book';
import { disableAssignment } from '../fn/teacher-features/disable-assignment';
import { DisableAssignment$Params } from '../fn/teacher-features/disable-assignment';
import { downloadTextBookCover } from '../fn/teacher-features/download-text-book-cover';
import { DownloadTextBookCover$Params } from '../fn/teacher-features/download-text-book-cover';
import { getAllAssociatedStudents } from '../fn/teacher-features/get-all-associated-students';
import { GetAllAssociatedStudents$Params } from '../fn/teacher-features/get-all-associated-students';
import { getAssignmentByCourseAndDeliveryAndStudent } from '../fn/teacher-features/get-assignment-by-course-and-delivery-and-student';
import { GetAssignmentByCourseAndDeliveryAndStudent$Params } from '../fn/teacher-features/get-assignment-by-course-and-delivery-and-student';
import { getAssignmentsByCourseAndDelivery } from '../fn/teacher-features/get-assignments-by-course-and-delivery';
import { GetAssignmentsByCourseAndDelivery$Params } from '../fn/teacher-features/get-assignments-by-course-and-delivery';
import { getCourseInformation } from '../fn/teacher-features/get-course-information';
import { GetCourseInformation$Params } from '../fn/teacher-features/get-course-information';
import { getCourses } from '../fn/teacher-features/get-courses';
import { GetCourses$Params } from '../fn/teacher-features/get-courses';
import { getStudentsByCourse } from '../fn/teacher-features/get-students-by-course';
import { GetStudentsByCourse$Params } from '../fn/teacher-features/get-students-by-course';
import { getTeacherInformation } from '../fn/teacher-features/get-teacher-information';
import { GetTeacherInformation$Params } from '../fn/teacher-features/get-teacher-information';
import { getTextBookInformation } from '../fn/teacher-features/get-text-book-information';
import { GetTextBookInformation$Params } from '../fn/teacher-features/get-text-book-information';
import { PageAssignmentResponse } from '../models/page-assignment-response';
import { PageCourseResponse } from '../models/page-course-response';
import { PageStudentResponse } from '../models/page-student-response';
import { registerTeacher } from '../fn/teacher-features/register-teacher';
import { RegisterTeacher$Params } from '../fn/teacher-features/register-teacher';
import { searchStudent } from '../fn/teacher-features/search-student';
import { SearchStudent$Params } from '../fn/teacher-features/search-student';
import { StudentResponse } from '../models/student-response';
import { submitFeedback } from '../fn/teacher-features/submit-feedback';
import { SubmitFeedback$Params } from '../fn/teacher-features/submit-feedback';
import { TeacherResponse } from '../models/teacher-response';
import { TextBookResponse } from '../models/text-book-response';
import { uploadTextBookCover } from '../fn/teacher-features/upload-text-book-cover';
import { UploadTextBookCover$Params } from '../fn/teacher-features/upload-text-book-cover';


/**
 * These operations allow the Teacher user to manage their account.
 */
@Injectable({ providedIn: 'root' })
export class TeacherFeaturesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getTeacherInformation()` */
  static readonly GetTeacherInformationPath = '/api/v1/teacher';

  /**
   * Teacher Information.
   *
   * Get Teacher Information
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTeacherInformation()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeacherInformation$Response(params?: GetTeacherInformation$Params, context?: HttpContext): Observable<StrictHttpResponse<TeacherResponse>> {
    return getTeacherInformation(this.http, this.rootUrl, params, context);
  }

  /**
   * Teacher Information.
   *
   * Get Teacher Information
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTeacherInformation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTeacherInformation(params?: GetTeacherInformation$Params, context?: HttpContext): Observable<TeacherResponse> {
    return this.getTeacherInformation$Response(params, context).pipe(
      map((r: StrictHttpResponse<TeacherResponse>): TeacherResponse => r.body)
    );
  }

  /** Path part for operation `registerTeacher()` */
  static readonly RegisterTeacherPath = '/api/v1/teacher';

  /**
   * Teacher Registration.
   *
   * Allow the Teacher user to register in the system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerTeacher()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerTeacher$Response(params: RegisterTeacher$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return registerTeacher(this.http, this.rootUrl, params, context);
  }

  /**
   * Teacher Registration.
   *
   * Allow the Teacher user to register in the system.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registerTeacher$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerTeacher(params: RegisterTeacher$Params, context?: HttpContext): Observable<void> {
    return this.registerTeacher$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createTextBook()` */
  static readonly CreateTextBookPath = '/api/v1/teacher/textbook';

  /**
   * Textbook Creation.
   *
   * Create a textbook
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTextBook()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTextBook$Response(params: CreateTextBook$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return createTextBook(this.http, this.rootUrl, params, context);
  }

  /**
   * Textbook Creation.
   *
   * Create a textbook
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createTextBook$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTextBook(params: CreateTextBook$Params, context?: HttpContext): Observable<void> {
    return this.createTextBook$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAssignmentsByCourseAndDelivery()` */
  static readonly GetAssignmentsByCourseAndDeliveryPath = '/api/v1/teacher/assignment';

  /**
   * Assignments by Course and Delivery.
   *
   * Get all assignments by course and delivery date
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAssignmentsByCourseAndDelivery()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAssignmentsByCourseAndDelivery$Response(params: GetAssignmentsByCourseAndDelivery$Params, context?: HttpContext): Observable<StrictHttpResponse<PageAssignmentResponse>> {
    return getAssignmentsByCourseAndDelivery(this.http, this.rootUrl, params, context);
  }

  /**
   * Assignments by Course and Delivery.
   *
   * Get all assignments by course and delivery date
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAssignmentsByCourseAndDelivery$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAssignmentsByCourseAndDelivery(params: GetAssignmentsByCourseAndDelivery$Params, context?: HttpContext): Observable<PageAssignmentResponse> {
    return this.getAssignmentsByCourseAndDelivery$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageAssignmentResponse>): PageAssignmentResponse => r.body)
    );
  }

  /** Path part for operation `createAssignment()` */
  static readonly CreateAssignmentPath = '/api/v1/teacher/assignment';

  /**
   * Assignment Creation.
   *
   * Create an assignment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createAssignment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAssignment$Response(params: CreateAssignment$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return createAssignment(this.http, this.rootUrl, params, context);
  }

  /**
   * Assignment Creation.
   *
   * Create an assignment
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createAssignment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createAssignment(params: CreateAssignment$Params, context?: HttpContext): Observable<void> {
    return this.createAssignment$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `disableAssignment()` */
  static readonly DisableAssignmentPath = '/api/v1/teacher/assignment';

  /**
   * Assignment Disabling.
   *
   * Disable an assignment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `disableAssignment()` instead.
   *
   * This method doesn't expect any request body.
   */
  disableAssignment$Response(params: DisableAssignment$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return disableAssignment(this.http, this.rootUrl, params, context);
  }

  /**
   * Assignment Disabling.
   *
   * Disable an assignment
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `disableAssignment$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  disableAssignment(params: DisableAssignment$Params, context?: HttpContext): Observable<void> {
    return this.disableAssignment$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `downloadTextBookCover()` */
  static readonly DownloadTextBookCoverPath = '/api/v1/teacher/textbook/{textBookID}/cover';

  /**
   * Textbook Cover Download.
   *
   * Download the cover of a textbook
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `downloadTextBookCover()` instead.
   *
   * This method doesn't expect any request body.
   */
  downloadTextBookCover$Response(params: DownloadTextBookCover$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return downloadTextBookCover(this.http, this.rootUrl, params, context);
  }

  /**
   * Textbook Cover Download.
   *
   * Download the cover of a textbook
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `downloadTextBookCover$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  downloadTextBookCover(params: DownloadTextBookCover$Params, context?: HttpContext): Observable<Blob> {
    return this.downloadTextBookCover$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `uploadTextBookCover()` */
  static readonly UploadTextBookCoverPath = '/api/v1/teacher/textbook/{textBookID}/cover';

  /**
   * Textbook Cover Upload.
   *
   * Upload the cover of a textbook
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadTextBookCover()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadTextBookCover$Response(params: UploadTextBookCover$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return uploadTextBookCover(this.http, this.rootUrl, params, context);
  }

  /**
   * Textbook Cover Upload.
   *
   * Upload the cover of a textbook
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadTextBookCover$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadTextBookCover(params: UploadTextBookCover$Params, context?: HttpContext): Observable<void> {
    return this.uploadTextBookCover$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllAssociatedStudents()` */
  static readonly GetAllAssociatedStudentsPath = '/api/v1/teacher/student/responsibility';

  /**
   * All associated students.
   *
   * Get all students associated with the teacher
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllAssociatedStudents()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllAssociatedStudents$Response(params?: GetAllAssociatedStudents$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<StudentResponse>>> {
    return getAllAssociatedStudents(this.http, this.rootUrl, params, context);
  }

  /**
   * All associated students.
   *
   * Get all students associated with the teacher
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllAssociatedStudents$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllAssociatedStudents(params?: GetAllAssociatedStudents$Params, context?: HttpContext): Observable<Array<StudentResponse>> {
    return this.getAllAssociatedStudents$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<StudentResponse>>): Array<StudentResponse> => r.body)
    );
  }

  /** Path part for operation `associateStudent()` */
  static readonly AssociateStudentPath = '/api/v1/teacher/student/responsibility';

  /**
   * Associate Student.
   *
   * Associate a student to the teacher
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `associateStudent()` instead.
   *
   * This method doesn't expect any request body.
   */
  associateStudent$Response(params: AssociateStudent$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return associateStudent(this.http, this.rootUrl, params, context);
  }

  /**
   * Associate Student.
   *
   * Associate a student to the teacher
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `associateStudent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  associateStudent(params: AssociateStudent$Params, context?: HttpContext): Observable<void> {
    return this.associateStudent$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `associateTextBookToCourse()` */
  static readonly AssociateTextBookToCoursePath = '/api/v1/teacher/course/textbook';

  /**
   * Course and Textbook Association.
   *
   * Attach a textbook to a course
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `associateTextBookToCourse()` instead.
   *
   * This method doesn't expect any request body.
   */
  associateTextBookToCourse$Response(params: AssociateTextBookToCourse$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return associateTextBookToCourse(this.http, this.rootUrl, params, context);
  }

  /**
   * Course and Textbook Association.
   *
   * Attach a textbook to a course
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `associateTextBookToCourse$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  associateTextBookToCourse(params: AssociateTextBookToCourse$Params, context?: HttpContext): Observable<void> {
    return this.associateTextBookToCourse$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `associateStudentsToCourse()` */
  static readonly AssociateStudentsToCoursePath = '/api/v1/teacher/course/student';

  /**
   * Course and Students Association.
   *
   * Attach students to a course
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `associateStudentsToCourse()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  associateStudentsToCourse$Response(params: AssociateStudentsToCourse$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return associateStudentsToCourse(this.http, this.rootUrl, params, context);
  }

  /**
   * Course and Students Association.
   *
   * Attach students to a course
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `associateStudentsToCourse$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  associateStudentsToCourse(params: AssociateStudentsToCourse$Params, context?: HttpContext): Observable<void> {
    return this.associateStudentsToCourse$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `submitFeedback()` */
  static readonly SubmitFeedbackPath = '/api/v1/teacher/assignment/feedback';

  /**
   * Assignment Feedback.
   *
   * Submit feedback for an assignment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `submitFeedback()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  submitFeedback$Response(params: SubmitFeedback$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return submitFeedback(this.http, this.rootUrl, params, context);
  }

  /**
   * Assignment Feedback.
   *
   * Submit feedback for an assignment
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `submitFeedback$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  submitFeedback(params: SubmitFeedback$Params, context?: HttpContext): Observable<void> {
    return this.submitFeedback$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `searchStudent()` */
  static readonly SearchStudentPath = '/api/v1/teacher/student/search';

  /**
   * Search Student.
   *
   * Search for a student by first name, last name or email
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `searchStudent()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchStudent$Response(params?: SearchStudent$Params, context?: HttpContext): Observable<StrictHttpResponse<PageStudentResponse>> {
    return searchStudent(this.http, this.rootUrl, params, context);
  }

  /**
   * Search Student.
   *
   * Search for a student by first name, last name or email
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `searchStudent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  searchStudent(params?: SearchStudent$Params, context?: HttpContext): Observable<PageStudentResponse> {
    return this.searchStudent$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageStudentResponse>): PageStudentResponse => r.body)
    );
  }

  /** Path part for operation `getCourses()` */
  static readonly GetCoursesPath = '/api/v1/teacher/course';

  /**
   * Teacher Courses.
   *
   * Get all courses associated with the teacher
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCourses()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCourses$Response(params?: GetCourses$Params, context?: HttpContext): Observable<StrictHttpResponse<PageCourseResponse>> {
    return getCourses(this.http, this.rootUrl, params, context);
  }

  /**
   * Teacher Courses.
   *
   * Get all courses associated with the teacher
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCourses$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCourses(params?: GetCourses$Params, context?: HttpContext): Observable<PageCourseResponse> {
    return this.getCourses$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageCourseResponse>): PageCourseResponse => r.body)
    );
  }

  /** Path part for operation `getCourseInformation()` */
  static readonly GetCourseInformationPath = '/api/v1/teacher/course/{courseCode}';

  /**
   * Course Information.
   *
   * Get information about a course
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCourseInformation()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCourseInformation$Response(params: GetCourseInformation$Params, context?: HttpContext): Observable<StrictHttpResponse<CourseResponse>> {
    return getCourseInformation(this.http, this.rootUrl, params, context);
  }

  /**
   * Course Information.
   *
   * Get information about a course
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCourseInformation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCourseInformation(params: GetCourseInformation$Params, context?: HttpContext): Observable<CourseResponse> {
    return this.getCourseInformation$Response(params, context).pipe(
      map((r: StrictHttpResponse<CourseResponse>): CourseResponse => r.body)
    );
  }

  /** Path part for operation `getTextBookInformation()` */
  static readonly GetTextBookInformationPath = '/api/v1/teacher/course/{courseCode}/textbook';

  /**
   * Textbook Course.
   *
   * List of textbooks by course
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTextBookInformation()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTextBookInformation$Response(params: GetTextBookInformation$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TextBookResponse>>> {
    return getTextBookInformation(this.http, this.rootUrl, params, context);
  }

  /**
   * Textbook Course.
   *
   * List of textbooks by course
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTextBookInformation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTextBookInformation(params: GetTextBookInformation$Params, context?: HttpContext): Observable<Array<TextBookResponse>> {
    return this.getTextBookInformation$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TextBookResponse>>): Array<TextBookResponse> => r.body)
    );
  }

  /** Path part for operation `getStudentsByCourse()` */
  static readonly GetStudentsByCoursePath = '/api/v1/teacher/course/{courseCode}/student';

  /**
   * Students by Course.
   *
   * Get all students associated with a course
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getStudentsByCourse()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStudentsByCourse$Response(params: GetStudentsByCourse$Params, context?: HttpContext): Observable<StrictHttpResponse<PageStudentResponse>> {
    return getStudentsByCourse(this.http, this.rootUrl, params, context);
  }

  /**
   * Students by Course.
   *
   * Get all students associated with a course
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getStudentsByCourse$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getStudentsByCourse(params: GetStudentsByCourse$Params, context?: HttpContext): Observable<PageStudentResponse> {
    return this.getStudentsByCourse$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageStudentResponse>): PageStudentResponse => r.body)
    );
  }

  /** Path part for operation `getAssignmentByCourseAndDeliveryAndStudent()` */
  static readonly GetAssignmentByCourseAndDeliveryAndStudentPath = '/api/v1/teacher/assignment/{courseCode}/{studentID}';

  /**
   * Assignment by Course, Delivery and Student.
   *
   * Get an assignment by course, delivery date and student
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAssignmentByCourseAndDeliveryAndStudent()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAssignmentByCourseAndDeliveryAndStudent$Response(params: GetAssignmentByCourseAndDeliveryAndStudent$Params, context?: HttpContext): Observable<StrictHttpResponse<AssignmentResponse>> {
    return getAssignmentByCourseAndDeliveryAndStudent(this.http, this.rootUrl, params, context);
  }

  /**
   * Assignment by Course, Delivery and Student.
   *
   * Get an assignment by course, delivery date and student
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAssignmentByCourseAndDeliveryAndStudent$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAssignmentByCourseAndDeliveryAndStudent(params: GetAssignmentByCourseAndDeliveryAndStudent$Params, context?: HttpContext): Observable<AssignmentResponse> {
    return this.getAssignmentByCourseAndDeliveryAndStudent$Response(params, context).pipe(
      map((r: StrictHttpResponse<AssignmentResponse>): AssignmentResponse => r.body)
    );
  }

}
