import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';

export interface Person {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}
export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}

@Injectable({providedIn: 'root'})
export class AuthComponent {
  public error$: Subject<string> = new Subject<string>();
  constructor(private router: Router, private http: HttpClient) {}

  get token(): string {
    const expDate = new Date(localStorage.getItem('fb-token-exp'));
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('fb-token');
  }
  login(person: Person): Observable<any> {
    person.returnSecureToken = true;
    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseConfig.apiKey}`,
        person
      )
      .pipe(tap(this.setToken), catchError(this.handleError.bind(this)));
  }
  logout() {
    return this.setToken(null);
  }

  isAuthenticated() {
    return !!this.token;
  }

  private handleError(error: HttpErrorResponse) {
    const { message } = error.error.error;
    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('invalid email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('invalid password');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('email not found');
        break;
    }
    return throwError(error);
  }

  private setToken(response: FbAuthResponse | null) {
    if (response) {
      const expDate = new Date(
        new Date().getTime() + +response.expiresIn * 1000
      );
      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
