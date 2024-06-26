import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {}

  public saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }
}
