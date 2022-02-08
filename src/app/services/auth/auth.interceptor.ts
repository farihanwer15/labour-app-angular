import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from './auth.service';
import { tap } from 'rxjs/operators';
import { LocalStoreService } from '../local-store.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public auth: AuthenticationService
        , private localStorage: LocalStoreService
        , private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.localStorage.getAccessToken();
        let requestItem = request;
        if (token) {
            requestItem = request.clone({
                headers: request.headers.append('Authorization',
                    `Bearer ${token}`)
            });
        }
        return next.handle(requestItem).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // letting it pass
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    this.localStorage.deleteAccessToken();
                    // this.toastr.error("Please login again.", "Session ended");
                    this.router.navigate(['/auth/login']);
                }
            }
        }));
    }
}
