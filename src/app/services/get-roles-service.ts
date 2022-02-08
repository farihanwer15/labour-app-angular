import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Roles } from "../models/role.model";
import { WebApiService } from "./web-api-service";

@Injectable({
    providedIn: 'root'
})

export class SiteOwnerServices {

    constructor(private webApi: WebApiService) { }

    getRoles(): Observable<Roles> {
        return this.webApi.get<Roles>('/get-roles');
    }

    createRoles(body: Roles): Observable<Roles> {
        return this.webApi.post<Roles>('/create-role', body);
    }

    getRoleById(id: number): Observable<Roles> {
        return this.webApi.get<Roles>(`/get-role-by-id/${id}`)
    }

    updateRoles(id: number, body: Roles): Observable<Roles> {
        return this.webApi.put<Roles>(`/update-role/${id}`, body)
    }
    deleteRoles(id: number): Observable<Roles> {
        return this.webApi.delete<Roles>(`/delete-role/${id}`)
    }
}