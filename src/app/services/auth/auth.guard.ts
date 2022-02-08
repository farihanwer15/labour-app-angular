import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private auth: AuthenticationService, private router: Router) {}

canActivate(): Promise<boolean> {
    return new Promise(resolve => {
        if(this.auth.isAuthenticated()){
            resolve(true);
        } else {
           // this.toastr.error("Please login...", "Unauthorized");
            this.router.navigate(['/auth/login']);
            resolve(false);
        }
    });
}
}