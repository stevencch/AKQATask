"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var data_service_js_1 = require("./data.service.js");
require("rxjs/add/operator/toPromise");
var AppService = (function () {
    function AppService(http, data) {
        this.http = http;
        this.data = data;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.apiUrl = '/api/app'; // URL to web api
    }
    AppService.prototype.post = function (data, culture) {
        var _this = this;
        if (culture !== '') {
            this.headers.append('Accept-Language', culture);
        }
        var url = this.apiUrl + '/convert';
        return this.http
            .post(url, JSON.stringify(data), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            _this.data.broadcastHttpMessage('200 OK');
            return res.json();
        })
            .catch(function (error) {
            if (console) {
                console.error('An error occurred', error);
            }
            _this.data.broadcastHttpMessage('failed to post the data.');
            return Promise.reject(error.message || error);
        });
    };
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, data_service_js_1.DataService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map