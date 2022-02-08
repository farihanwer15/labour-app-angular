import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStoreService } from '../local-store-service';
import { WebApiService } from '../web-api-service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthenticationService {
    constructor(
        private localStorage: LocalStoreService,
        private apiService: WebApiService,
        private http: HttpClient,
    ) {
    }

    isAuthenticated() {
        const token = this.localStorage.getAccessToken();
        return token != null;
    }

    // verifyToken(): Observable<any> {
    //     const headers = new HttpHeaders({
    //         'Content-Type': 'application/json',
    //         'Authorization': this.localStorage.getAccessToken() || ''
    //     })
    //     return this.http.get<any>(`${environment.apiURL}/get/verify/token`, { headers: headers });
    // }
    
    verifyToken(): Observable<any> {
        return this.apiService.get<any>(`/get/verify/token`);
    }


    // superLogin(body: SuperUser): Observable<SuperUser> {
    //     return this.apiService.post<SuperUser>(`/v1/api/super-user/login`, body);
    // }
}