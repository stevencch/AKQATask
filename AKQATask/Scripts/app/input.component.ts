import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service.js';

import { InfoModel, ResultModel } from './app.model.js';

import { DataService } from './data.service.js';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-input',
    templateUrl: '/js/app/html/input.html'
})
export class InputComponent {

    public info: InfoModel;

    public subscription: Subscription;

    public message: string;

    public numberValidation: string;

    public selectedCulture: string = 'en';

    constructor(private appService: AppService, private data: DataService) {
        this.info = new InfoModel();
        this.info.name = '';
        this.info.number = '';
    }

    public ngOnInit(): void {
        this.subscription = this.data.httpMessage.subscribe(
            (x: any) => {
            this.message = x as string;
        });
    }

    public onNumberChange(value: string): void {
        const myRe = /[^0-9,.]/;
        const isMatched = myRe.test(value);
        if (isMatched) {
            this.numberValidation = 'Invalid Number';
        }
        else {
            this.numberValidation = '';
        }
    }

    public convert(): void {
        this.appService.post(this.info, this.selectedCulture)
            .then(response => {
                if (response.success) {
                    const info = new InfoModel();
                    info.name = response.result.name;
                    info.number = response.result.number;
                    this.data.broadcastChange(info);
                }else {
                    this.message = response.message;
                }
            }
        );
    }
}
