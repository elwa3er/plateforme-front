import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from './user.model';

export class UserToken {
  constructor(public email: string, public role: string) {}
}

export class Permissions {
  canActivate(user: UserToken, id: string): boolean {
    return user.role === 'manager';
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private permissions: Permissions,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const id = localStorage.getItem('userId');
    if (!id) {
      return false;
    }
    return this.authService.getUserById(+id).pipe(
      map((user: User) => {
        if (user.role === 'manager') {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
@Injectable({
  providedIn: 'root',
})
export class ResetPasswordGuard implements CanActivateChild {
  constructor(
    private authService: AuthService,
    private permissions: Permissions,
    private router: Router
  ) {}

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const id = localStorage.getItem('userId');
    if (!id) {
      return false;
    }
    const user = this.authService.getUserById(+id);
    let thiUser = null;
    user.pipe(
      map((user1: User) => {
        if (user) {
          thiUser = user;
        } else {
          thiUser = null;
        }
      })
    );
    if (thiUser && this.permissions.canActivate(thiUser, id)) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
