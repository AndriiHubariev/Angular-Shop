import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthComponent } from '../admin/auth/auth.component';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthComponent, private router: Router) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.auth.isAuthenticated()) {
      req = req.clone({
        setParams: { auth: this.auth.token },
      });
    }
    return next.handle(req)
    .pipe(
        catchError((e: HttpErrorResponse) => {
            if (e.status === 401) {
                this.auth.logout();
                this.router.navigate(['/admin', 'login']);
            }
            return throwError(e);
        })
    );
  }
}
