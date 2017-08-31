import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { InfoModel, ResultModel } from './app.model.js';

@Injectable()
export class DataService {

    private messageSource: BehaviorSubject<InfoModel> = new BehaviorSubject<InfoModel>(null);
    public currentMessage: any = this.messageSource.asObservable();

    public broadcastChange(input: InfoModel) {
        this.messageSource.next(input);
    }
}
