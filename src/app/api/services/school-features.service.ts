/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { EventResponse } from '../models/event-response';
import { getFutureEvents } from '../fn/school-features/get-future-events';
import { GetFutureEvents$Params } from '../fn/school-features/get-future-events';
import { getSchools } from '../fn/school-features/get-schools';
import { GetSchools$Params } from '../fn/school-features/get-schools';
import { SchoolResponse } from '../models/school-response';


/**
 * These operations are related to the school access features.
 */
@Injectable({ providedIn: 'root' })
export class SchoolFeaturesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getFutureEvents()` */
  static readonly GetFutureEventsPath = '/api/v1/school/{schoolId}/events/future';

  /**
   * Get all future events by school id.
   *
   * This operation retrieves all future events by school id.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFutureEvents()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFutureEvents$Response(params: GetFutureEvents$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<EventResponse>>> {
    return getFutureEvents(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all future events by school id.
   *
   * This operation retrieves all future events by school id.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFutureEvents$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFutureEvents(params: GetFutureEvents$Params, context?: HttpContext): Observable<Array<EventResponse>> {
    return this.getFutureEvents$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<EventResponse>>): Array<EventResponse> => r.body)
    );
  }

  /** Path part for operation `getSchools()` */
  static readonly GetSchoolsPath = '/api/v1/school/all';

  /**
   * Get all schools.
   *
   * This operation retrieves all schools and it doesn't require any authentication.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSchools()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSchools$Response(params?: GetSchools$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<SchoolResponse>>> {
    return getSchools(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all schools.
   *
   * This operation retrieves all schools and it doesn't require any authentication.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSchools$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSchools(params?: GetSchools$Params, context?: HttpContext): Observable<Array<SchoolResponse>> {
    return this.getSchools$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<SchoolResponse>>): Array<SchoolResponse> => r.body)
    );
  }

}
