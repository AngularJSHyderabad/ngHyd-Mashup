import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class CanActivateChildGuard implements CanActivateChild {
    private isLoggedIn = false;
    constructor(private router: Router) {}
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        return true;
    };
};
