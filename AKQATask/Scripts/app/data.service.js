"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var DataService = (function () {
    function DataService() {
        this.cultures = ['en', 'fr'];
        this.httpSource = new BehaviorSubject_1.BehaviorSubject('');
        this.httpMessage = this.httpSource.asObservable();
        this.messageSource = new BehaviorSubject_1.BehaviorSubject(null);
        this.currentInfo = this.messageSource.asObservable();
    }
    DataService.prototype.broadcastChange = function (input) {
        this.messageSource.next(input);
    };
    DataService.prototype.broadcastHttpMessage = function (input) {
        this.httpSource.next(input);
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable()
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map