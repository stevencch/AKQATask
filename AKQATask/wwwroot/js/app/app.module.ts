import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component.js';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
        HttpModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
