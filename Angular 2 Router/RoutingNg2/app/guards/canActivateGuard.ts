import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class CanActivateGuard implements CanActivate {
    private isLoggedIn = false;
    constructor(private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        return this.isUserLoggedIn() ? true : this.redirectToLogin()
    };

    isUserLoggedIn(){
        console.log("validating the login");
        var isLoggedIn = localStorage.getItem("isLoggedIn");
        return isLoggedIn && isLoggedIn === "true";
    };

    redirectToLogin(){
        this.router.navigateByUrl('/login');
        return false;
    }
};
