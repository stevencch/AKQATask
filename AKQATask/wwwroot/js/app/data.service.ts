import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { InfoModel, ResultModel } from './app.model.js';

@Injectable()
export class DataService {
    public cultures: string[] = ['en', 'fr'];

    private httpSource: BehaviorSubject<string> = new BehaviorSubject<string>('');
    public httpMessage: any = this.httpSource.asObservable();

    private messageSource: BehaviorSubject<InfoModel> = new BehaviorSubject<InfoModel>(null);
    public currentInfo: any = this.messageSource.asObservable();

    public broadcastChange(input: InfoModel) {
        this.messageSource.next(input);
    }

    public broadcastHttpMessage(input: string) {
        this.httpSource.next(input);
    }

}
