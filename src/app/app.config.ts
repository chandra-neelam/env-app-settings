import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable()
export class AppConfig {

    static apiUrl: string;

    constructor(private http: HttpClient) {
    }

    public load() {
        return new Promise((resolve, reject) => {
            this.http.get(`appconfig.json?timestamp=${new Date().getTime()}`)
                .pipe(catchError(err => this.handleError(err, resolve)))
                .subscribe((res: any) => {
                    AppConfig.apiUrl = res.apiUrl;
                    resolve(true);
                });
        });
    }

    private handleError(error: HttpErrorResponse, resolve: any) {
        console.log('Error occurred.');
        resolve(false);
        return throwError('Internal Server Error. Please try after some time.');
    }

}