import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {UserRole} from "./user-role";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  public storeAccessToken(token: string): void {
    localStorage.setItem('access_token', JSON.stringify(token));
  }

  public getAccessToken(): string | null {
    return localStorage.getItem('access_token');
  }

  public storeCurrentUser(role: string): void {
    localStorage.setItem('current_user', role);
  }

  public getCurrentUser(): UserRole {
    const role = localStorage.getItem('current_user');
    return UserRole[role as keyof typeof UserRole]
  }

  public isTokenInvalid(): boolean {
    return !this.isTokenValid();
  }

  public isTokenValid(): boolean {
    const token = this.getAccessToken();

    if (!token) {
      return false;
    }

    const jwtHelper = new JwtHelperService();

    const isTokenExpired = jwtHelper.isTokenExpired(token);

    if (isTokenExpired) {
      localStorage.clear();
      return false;
    }

    return true;
  }

  public logout(): void {
    localStorage.clear();
    window.location.reload();
  }
}
