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
var app_service_js_1 = require("./app.service.js");
var app_model_js_1 = require("./app.model.js");
var data_service_js_1 = require("./data.service.js");
var OutputComponent = (function () {
    function OutputComponent(appService, data) {
        this.appService = appService;
        this.data = data;
    }
    OutputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.data.currentMessage.subscribe(function (x) {
            if (x == null) {
                _this.info = new app_model_js_1.InfoModel();
                _this.info.name = '';
                _this.info.number = '';
            }
            else {
                _this.info = x;
            }
        });
    };
    return OutputComponent;
}());
OutputComponent = __decorate([
    core_1.Component({
        selector: 'app-output',
        templateUrl: '/js/app/html/output.html'
    }),
    __metadata("design:paramtypes", [app_service_js_1.AppService, data_service_js_1.DataService])
], OutputComponent);
exports.OutputComponent = OutputComponent;
//# sourceMappingURL=output.component.js.map