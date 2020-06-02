import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { AuthApiServiceService } from './../services/auth-api-service.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
    constructor(private _log: AuthApiServiceService, private router: Router){

    }
    canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree  {
    if(this._log.isLogged) {      
      return true;
    } else {
      return this.router.createUrlTree(['/auth/login']);
    }
  }
  
}
