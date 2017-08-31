import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component.js';
import { ConvertorComponent } from './convertor.component.js';
import { InfoComponent } from './info.component.js';
import { InputComponent } from './input.component.js';
import { OutputComponent } from './output.component.js';

import { AppService } from './app.service.js';
import { DataService } from './data.service.js';

import { AppRoutingModule } from './app-routing.module.js';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ConvertorComponent,
        InfoComponent,
        InputComponent,
        OutputComponent
    ],
    providers: [AppService, DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
