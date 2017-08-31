import { Injectable } from '@angular/core';
import { InfoModel, ResultModel } from './app.model.js';
import { Headers, Http } from '@angular/http';
import { DataService } from './data.service.js';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

    private headers: Headers = new Headers({ 'Content-Type': 'application/json' });
    private apiUrl: string = '/api/app';  // URL to web api

    constructor(private http: Http, private data: DataService) {
    }

    public post(data: InfoModel, culture: string): Promise<ResultModel> {
        if (culture !== '') {
            this.headers.append('Accept-Language', culture);
        }
        const url = this.apiUrl + '/convert';
        return this.http
            .post(url, JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(
            res => {
                this.data.broadcastHttpMessage('200 OK');
                return res.json() as ResultModel;
            }
            )
            .catch(
            error => {
                if (console) {
                    console.error('An error occurred', error);
                }
                this.data.broadcastHttpMessage('failed to post the data.');
                return Promise.reject(error.message || error);
            }
            );
    }
}
