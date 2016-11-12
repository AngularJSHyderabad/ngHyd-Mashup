import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot }  from '@angular/router';
import { DetailsComponent } from '../details/details.component';
@Injectable()
export class CanDeactivateChildGuard implements CanDeactivate<DetailsComponent> {
  canDeactivate(component: DetailsComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    return window.confirm('Do you really want to move away?');
  }
}
