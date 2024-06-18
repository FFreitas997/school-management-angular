/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { authenticate } from '../fn/authentication/authenticate';
import { Authenticate$Params } from '../fn/authentication/authenticate';
import { AuthenticationResponse } from '../models/authentication-response';
import { confirmAccount } from '../fn/authentication/confirm-account';
import { ConfirmAccount$Params } from '../fn/authentication/confirm-account';
import { generateActivationCode } from '../fn/authentication/generate-activation-code';
import { GenerateActivationCode$Params } from '../fn/authentication/generate-activation-code';
import { refreshToken } from '../fn/authentication/refresh-token';
import { RefreshToken$Params } from '../fn/authentication/refresh-token';


/**
 * These operations are related to the Authentication
 */
@Injectable({ providedIn: 'root' })
export class AuthenticationService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `confirmAccount()` */
  static readonly ConfirmAccountPath = '/api/v1/auth/activate-account';

  /**
   * Activate account.
   *
   * Activate the account of a user in the system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `confirmAccount()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirmAccount$Response(params: ConfirmAccount$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return confirmAccount(this.http, this.rootUrl, params, context);
  }

  /**
   * Activate account.
   *
   * Activate the account of a user in the system.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `confirmAccount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  confirmAccount(params: ConfirmAccount$Params, context?: HttpContext): Observable<void> {
    return this.confirmAccount$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `refreshToken()` */
  static readonly RefreshTokenPath = '/api/v1/auth/refresh-token';

  /**
   * Refresh token.
   *
   * Refresh the token of a user in the system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `refreshToken()` instead.
   *
   * This method doesn't expect any request body.
   */
  refreshToken$Response(params?: RefreshToken$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return refreshToken(this.http, this.rootUrl, params, context);
  }

  /**
   * Refresh token.
   *
   * Refresh the token of a user in the system.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `refreshToken$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  refreshToken(params?: RefreshToken$Params, context?: HttpContext): Observable<void> {
    return this.refreshToken$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `generateActivationCode()` */
  static readonly GenerateActivationCodePath = '/api/v1/auth/generate-activation-code';

  /**
   * Generate activation code.
   *
   * Generate an activation code for a user in the system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `generateActivationCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  generateActivationCode$Response(params: GenerateActivationCode$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return generateActivationCode(this.http, this.rootUrl, params, context);
  }

  /**
   * Generate activation code.
   *
   * Generate an activation code for a user in the system.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `generateActivationCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  generateActivationCode(params: GenerateActivationCode$Params, context?: HttpContext): Observable<void> {
    return this.generateActivationCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `authenticate()` */
  static readonly AuthenticatePath = '/api/v1/auth/authenticate';

  /**
   * Authenticate a user.
   *
   * Authenticate a user in the system
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authenticate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate$Response(params: Authenticate$Params, context?: HttpContext): Observable<StrictHttpResponse<AuthenticationResponse>> {
    return authenticate(this.http, this.rootUrl, params, context);
  }

  /**
   * Authenticate a user.
   *
   * Authenticate a user in the system
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `authenticate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authenticate(params: Authenticate$Params, context?: HttpContext): Observable<AuthenticationResponse> {
    return this.authenticate$Response(params, context).pipe(
      map((r: StrictHttpResponse<AuthenticationResponse>): AuthenticationResponse => r.body)
    );
  }

}
