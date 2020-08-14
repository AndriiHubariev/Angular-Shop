import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthComponent } from '../admin/auth/auth.component';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthComponent, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean | boolean> | Promise<boolean | boolean> {
   if (this.auth.isAuthenticated()) {
       return true;
   } else {
       this.auth.logout();
       this.router.navigate(['/admin', 'login']);
   }
  }
}
