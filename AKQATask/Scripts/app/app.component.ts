import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: '/js/app/html/app.html',
    styleUrls: ['/js/app/css/app.css']
})
export class AppComponent implements OnInit {
    public title: string ;

    public ngOnInit(): void {
        this.title = 'Number To Words Convertor';
    }
}
