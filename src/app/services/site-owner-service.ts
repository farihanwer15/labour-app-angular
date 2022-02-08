import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SiteOwner } from "../models/siteOwner.model";
import { WebApiService } from "./web-api-service";

@Injectable({
    providedIn: 'root'
})

export class SiteOwnerServices {

    constructor(private webApi: WebApiService) { }

    getSiteOwner(): Observable<SiteOwner> {
        return this.webApi.get<SiteOwner>('/get-site-owners');
    }
    createSiteOwner(body: SiteOwner): Observable<SiteOwner> {
        return this.webApi.post<SiteOwner>('/create-site-owner', body);
    }
    getSiteOwnerById(id: number): Observable<SiteOwner> {
        return this.webApi.get<SiteOwner>(`/get-site-owner-by-id/${id}`)
    }

    siteOwnerUpdate(id: number, body: SiteOwner): Observable<SiteOwner> {
        return this.webApi.put<SiteOwner>(`/update-site-owner/${id}`, body)
    }
    siteOwnerDelete(id: number): Observable<SiteOwner> {
        return this.webApi.delete<SiteOwner>(`/delete-site-owner/${id}`)
    }
}