import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebApiService } from './web-api-service';
import { Observable } from 'rxjs';
import { Site } from '../models/site.model';

@Injectable({
    providedIn: 'root'
})

export class SiteServices {

    constructor(private webApi: WebApiService) { }

    getSiteUser(): Observable<Site> {
        return this.webApi.get<Site>('/get-sites');
    }
    createSite(body: Site): Observable<Site> {
        return this.webApi.post<Site>('/create-site', body);
    }
    deleteSite(id: number): Observable<Site> {
        return this.webApi.delete<Site>(`/delete-site/${id}`);
    }
    getSiteById(id: number): Observable<Site> {
        return this.webApi.get<Site>(`/get-site-by-id/${id}`);
    }
    updateSite(id: number, body: Site): Observable<Site> {
        return this.webApi.put<Site>(`/update-site/${id}`, body);
    }
}