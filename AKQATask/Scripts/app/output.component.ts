import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service.js';

import { InfoModel, ResultModel } from './app.model.js';

import { DataService } from './data.service.js';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-output',
    templateUrl: '/js/app/html/output.html'
})
export class OutputComponent {

    public subscription: Subscription;

    public info: InfoModel;

    constructor(private appService: AppService, private data: DataService) {
    }

    public ngOnInit(): void {
        this.subscription = this.data.currentInfo.subscribe((x: any) => {
            if (x == null) {
                this.info = new InfoModel();
                this.info.name = '';
                this.info.number = '';
            } else {
                this.info = x as InfoModel;
            }
        });
    }
}
