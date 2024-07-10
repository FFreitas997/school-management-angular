/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteUser } from '../fn/users-management-system/delete-user';
import { DeleteUser$Params } from '../fn/users-management-system/delete-user';
import { downloadUserImage } from '../fn/users-management-system/download-user-image';
import { DownloadUserImage$Params } from '../fn/users-management-system/download-user-image';
import { getAllUsers } from '../fn/users-management-system/get-all-users';
import { GetAllUsers$Params } from '../fn/users-management-system/get-all-users';
import { getUserById } from '../fn/users-management-system/get-user-by-id';
import { GetUserById$Params } from '../fn/users-management-system/get-user-by-id';
import { getUserRole } from '../fn/users-management-system/get-user-role';
import { GetUserRole$Params } from '../fn/users-management-system/get-user-role';
import { PageUserDto } from '../models/page-user-dto';
import { uploadUserImage } from '../fn/users-management-system/upload-user-image';
import { UploadUserImage$Params } from '../fn/users-management-system/upload-user-image';
import { UserDto } from '../models/user-dto';


/**
 * Endpoints for managing users in the system.
 */
@Injectable({ providedIn: 'root' })
export class UsersManagementSystemService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `downloadUserImage()` */
  static readonly DownloadUserImagePath = '/api/v1/users/profile-image';

  /**
   * Download User Image.
   *
   * Download user image in the system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `downloadUserImage()` instead.
   *
   * This method doesn't expect any request body.
   */
  downloadUserImage$Response(params?: DownloadUserImage$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return downloadUserImage(this.http, this.rootUrl, params, context);
  }

  /**
   * Download User Image.
   *
   * Download user image in the system.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `downloadUserImage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  downloadUserImage(params?: DownloadUserImage$Params, context?: HttpContext): Observable<Blob> {
    return this.downloadUserImage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `uploadUserImage()` */
  static readonly UploadUserImagePath = '/api/v1/users/profile-image';

  /**
   * Upload User Image.
   *
   * Upload user image in the system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadUserImage()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadUserImage$Response(params?: UploadUserImage$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return uploadUserImage(this.http, this.rootUrl, params, context);
  }

  /**
   * Upload User Image.
   *
   * Upload user image in the system.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadUserImage$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadUserImage(params?: UploadUserImage$Params, context?: HttpContext): Observable<void> {
    return this.uploadUserImage$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllUsers()` */
  static readonly GetAllUsersPath = '/api/v1/users';

  /**
   * Get all users.
   *
   * Get all users in the system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllUsers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers$Response(params?: GetAllUsers$Params, context?: HttpContext): Observable<StrictHttpResponse<PageUserDto>> {
    return getAllUsers(this.http, this.rootUrl, params, context);
  }

  /**
   * Get all users.
   *
   * Get all users in the system.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllUsers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllUsers(params?: GetAllUsers$Params, context?: HttpContext): Observable<PageUserDto> {
    return this.getAllUsers$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageUserDto>): PageUserDto => r.body)
    );
  }

  /** Path part for operation `getUserById()` */
  static readonly GetUserByIdPath = '/api/v1/users/{userID}';

  /**
   * Get user by ID.
   *
   * Get user by ID in the system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserById$Response(params: GetUserById$Params, context?: HttpContext): Observable<StrictHttpResponse<UserDto>> {
    return getUserById(this.http, this.rootUrl, params, context);
  }

  /**
   * Get user by ID.
   *
   * Get user by ID in the system.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserById(params: GetUserById$Params, context?: HttpContext): Observable<UserDto> {
    return this.getUserById$Response(params, context).pipe(
      map((r: StrictHttpResponse<UserDto>): UserDto => r.body)
    );
  }

  /** Path part for operation `deleteUser()` */
  static readonly DeleteUserPath = '/api/v1/users/{userID}';

  /**
   * Delete user.
   *
   * Delete user in the system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUser$Response(params: DeleteUser$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteUser(this.http, this.rootUrl, params, context);
  }

  /**
   * Delete user.
   *
   * Delete user in the system.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteUser(params: DeleteUser$Params, context?: HttpContext): Observable<void> {
    return this.deleteUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getUserRole()` */
  static readonly GetUserRolePath = '/api/v1/users/role';

  /**
   * Get User Role.
   *
   * Get user role in the system.
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getUserRole()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserRole$Response(params?: GetUserRole$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getUserRole(this.http, this.rootUrl, params, context);
  }

  /**
   * Get User Role.
   *
   * Get user role in the system.
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getUserRole$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getUserRole(params?: GetUserRole$Params, context?: HttpContext): Observable<string> {
    return this.getUserRole$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

}
