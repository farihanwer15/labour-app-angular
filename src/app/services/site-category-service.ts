import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SiteCategory } from "../models/site-category.model";
import { WebApiService } from "./web-api-service";

@Injectable({
    providedIn: 'root'
})

export class SiteCategoryServices {

    constructor(private webApi: WebApiService) { }

    getSiteCategory(): Observable<SiteCategory> {
        return this.webApi.get<SiteCategory>('/get-site-categories');
    }

    createSiteCategory(body: SiteCategory): Observable<SiteCategory> {
        return this.webApi.post<SiteCategory>('/create-site-category', body);
    }

    getSiteCategoryById(id: number): Observable<SiteCategory> {
        return this.webApi.get<SiteCategory>(`/get-site-category-by-id/${id}`)
    }

    updateSiteCategory(id: number, body: SiteCategory): Observable<SiteCategory> {
        return this.webApi.put<SiteCategory>(`/update-site-category/${id}`, body)
    }
    deleteSiteCategory(id: number): Observable<SiteCategory> {
        return this.webApi.delete<SiteCategory>(`/delete-site-category/${id}`)
    }
}
