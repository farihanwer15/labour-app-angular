import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Attedence } from "../models/attedence.model";
import { WebApiService } from "./web-api-service";

@Injectable({
    providedIn: 'root'
})
export class AttendenceServices {

    constructor(private webApi: WebApiService) { }

    getAttendence(): Observable<Attedence> {
        return this.webApi.get<Attedence>('/get-attendance');
    }
    createAttendence(body: Attedence): Observable<Attedence> {
        return this.webApi.post<Attedence>('/create-attendance', body);
    }
    getAttendenceById(id: number): Observable<Attedence> {
        return this.webApi.get<Attedence>(`/get-attendance-by-id/${id}`)
    }
    updateAttendence(id: number, body: Attedence): Observable<Attedence> {
        return this.webApi.put<Attedence>(`/update-attendance/${id}`, body)
    }
    deleteAttendence(id: number): Observable<Attedence> {
        return this.webApi.delete<Attedence>(`/delete-attendance/${id}`)
    }
}