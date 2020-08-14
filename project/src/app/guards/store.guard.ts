import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { StoreComponent } from '../store/store.componet';
import { HomeComponent } from '../store/components/home/home.component';
import { AppComponent } from '../app.component';
@Injectable()
export class StoreGuard {
  private firstNavigation = true;
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component !== AppComponent) {
        this.router.navigate(['home']);
        return false;
      }
    }
    return true;
  }
}
