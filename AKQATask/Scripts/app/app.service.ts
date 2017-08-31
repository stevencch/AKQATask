import { Injectable } from '@angular/core';
import { InfoModel, ResultModel } from './app.model.js';
import { Headers, Http } from '@angular/http';
import { DataService } from './data.service.js';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

    private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    private apiUrl: string = '/api/app';  // URL to web api

    constructor(private http: Http) {

    }

    public post(data: InfoModel): Promise<ResultModel> {
        const url = this.apiUrl + '/convert';
        return this.http
            .post(url, JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(
            res => res.json() as ResultModel
            )
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        if (console) {
            console.error('An error occurred', error);
        }
        return Promise.reject(error.message || error);
    }
}
