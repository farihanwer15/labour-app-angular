import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': 'localhost:4200',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class WebApiService {

  private baseUrl = environment.apiURL;
  constructor(private http: HttpClient) { }
  get<T>(url: string) {
    return this.http.get<T>(this.baseUrl + url, httpOptions)

      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  post<T>(url: string, dto: T) {

    return this.http.post<T>(this.baseUrl + url, dto, httpOptions)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  delete<T>(url: string) {
    return this.http.delete<T>(this.baseUrl + url, httpOptions)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  put<T>(url: string, dto: T) {
    return this.http.put<T>(this.baseUrl + url, dto, httpOptions)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}