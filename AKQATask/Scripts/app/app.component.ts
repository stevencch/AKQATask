import { Component, OnInit, ApplicationRef } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: '../../js/app/html/app.html',
    styleUrls: ['../../js/app/css/app.css']
})
export class AppComponent implements OnInit {
    public title: string = 'Action Services Configuration';
    public message: string = '';
    public instanceId: string = '';
    public assetId: string = '';
    constructor(private appRef: ApplicationRef) {
    }

    public ngOnInit(): void {
        this.message = 'a';
    }
}
