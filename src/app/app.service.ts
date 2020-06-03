import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { AppConfig } from './app.config';

@Injectable()
export class AppService {

    private API_URL: string = AppConfig.apiUrl;

    constructor(private http: HttpClient) {
    }

    public getEmployees<T>(uri: string, httpParams?: HttpParams) {
        const url = `${this.API_URL}/${uri}`;

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            params: httpParams
        };

        return this.http.get<T>(url, httpOptions)
            .pipe(catchError(err => this.handleError(err)));
    }

    private handleError(error: HttpErrorResponse) {
        console.log('Error occurred.');
        return throwError('Internal Server Error. Please try after some time.');
    }

}