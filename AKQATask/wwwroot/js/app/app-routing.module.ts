import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConvertorComponent } from './convertor.component.js';
import { InfoComponent } from './info.component.js';

const routes: Routes = [
    { path: '', component: ConvertorComponent },
    { path: 'convertor', component: ConvertorComponent },
    { path: 'info', component: InfoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }