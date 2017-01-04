import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.checkLogin(state.url);
    }

    checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn()) {
            return true;
        } else {
            this.authService.redirectURL = url;
            this.router.navigate(['/login']);
            return false;
        }
    }
}