import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SiteMainCategory } from "../models/site-main.model";
import { WebApiService } from "./web-api-service";

@Injectable({
    providedIn: 'root'
})

export class SiteMainCategoryServices {

    constructor(private webApi: WebApiService) { }

    getSiteMainCategory(): Observable<SiteMainCategory> {
        return this.webApi.get<SiteMainCategory>('/get-site-main-categories');
    }

    createSiteMainCategory(body: SiteMainCategory): Observable<SiteMainCategory> {
        return this.webApi.post<SiteMainCategory>('/create-site-main-category', body);
    }

    getSiteMainCategoryById(id: number): Observable<SiteMainCategory> {
        return this.webApi.get<SiteMainCategory>(`/get-site-main-category-by-id/${id}`)
    }

    updateSiteMainCategory(id: number, body: SiteMainCategory): Observable<SiteMainCategory> {
        return this.webApi.put<SiteMainCategory>(`/update-site-main-category/${id}`, body)
    }
    deleteSiteMainCategory(id: number): Observable<SiteMainCategory> {
        return this.webApi.delete<SiteMainCategory>(`/delete-site-main-category/${id}`)
    }
}
