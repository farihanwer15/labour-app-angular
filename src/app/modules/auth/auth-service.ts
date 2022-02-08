import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "./user.model";
import { WebApiService } from "../../services/web-api-service";

@Injectable({
    providedIn: 'root'
})
export class AuthServices {

    constructor(private webApi: WebApiService) { }


    loginUser(body: User): Observable<User> {

        return this.webApi.post<User>('/login-user', body)
    }
    createUser(body: User): Observable<User> {
        console.log(body);
        return this.webApi.post<User>('/register-user', body)
    }
    updateUser(id: number, body: User): Observable<User> {
        return this.webApi.put<User>(`/update-user/${id}`, body);
    }
    deleteUser(id: number): Observable<User> {
        return this.webApi.delete<User>(`/delete-user/${id}`)
    }
}