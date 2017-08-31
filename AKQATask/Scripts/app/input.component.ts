import { Component } from '@angular/core';

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

    constructor(private appService: AppService, private data: DataService) {
        this.info = new InfoModel();
        this.info.name = '';
        this.info.number = '';
    }

    public convert(): void {
        this.appService.post(this.info)
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
