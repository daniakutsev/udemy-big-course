import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // @ts-ignore
    return this.authService.isAuthenticated().then(isAuth => {
      if (isAuth) {
        return true
      } else {
        this.router.navigate(['/'], {
          queryParams: {isAuth: false}
        })
      }
    })
  }

}
