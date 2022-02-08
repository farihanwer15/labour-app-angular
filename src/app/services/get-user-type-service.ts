import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserType } from "../models/site.model";
import { WebApiService } from "./web-api-service";


@Injectable({
    providedIn: 'root'
})

export class getUserType {

    constructor(private webApi: WebApiService) { }

    getUser(): Observable<UserType> {
        return this.webApi.get<UserType>('/get-user-types');
    }

    getUserTypeById(id: number): Observable<UserType> {
        return this.webApi.get<UserType>(`/get-user-type-by-id/${id}`)
    }

    createUserType(body: UserType): Observable<UserType> {
        return this.webApi.post<UserType>('/create-user-type', body);
    }
    getUserTypeUpdate(id: number, body: UserType): Observable<UserType> {
        return this.webApi.put<UserType>(`/update-user-type/${id}`, body)
    }
    getUserTypeDelete(id: number): Observable<UserType> {
        return this.webApi.delete<UserType>(`/delete-user-type/${id}`)
    }
}