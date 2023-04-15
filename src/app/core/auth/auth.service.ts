import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from './user.model';

@Injectable()
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    return this.http
      .get<User>(`${this.apiUrl}?email=${email}&password=${password}`)
      .pipe(
        tap((users) => {
          if (users) {
            localStorage.setItem(this.tokenKey, users.id);
          } else {
            throw new Error('Invalid email or password');
          }
        })
      );
  }

  resetPassword(email: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}?email=${email}`).pipe(
      tap((users) => {
        if (users) {
          // Generate and send password reset email
        } else {
          throw new Error('Invalid email');
        }
      })
    );
  }
  getUserById(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url);
  }
  getExperts(): Observable<User[]> {
    const url = `${this.apiUrl}?role=expert`;
    return this.http.get<User[]>(url);
  }

  get isLoggedIn(): boolean {
    return localStorage.getItem(this.tokenKey) !== null;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
