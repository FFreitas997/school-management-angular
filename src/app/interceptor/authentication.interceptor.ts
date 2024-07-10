import {HttpHeaders, HttpInterceptorFn} from '@angular/common/http';
import {inject} from "@angular/core";
import {AuthService} from "../services/authentication/auth.service";

export const authenticationInterceptor: HttpInterceptorFn = (request, next) => {

  const token = inject(AuthService).getAccessToken();

  if (token) {
    request = request.clone({
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    });
  }
  return next(request);
};
