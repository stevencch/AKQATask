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
var InputComponent = (function () {
    function InputComponent(appService, data) {
        this.appService = appService;
        this.data = data;
        this.selectedCulture = 'en';
        this.info = new app_model_js_1.InfoModel();
        this.info.name = '';
        this.info.number = '';
    }
    InputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.data.httpMessage.subscribe(function (x) {
            _this.message = x;
        });
    };
    InputComponent.prototype.onNumberChange = function (value) {
        var myRe = /[^0-9,.]/;
        var isMatched = myRe.test(value);
        if (isMatched) {
            this.numberValidation = 'Invalid Number';
        }
    };
    InputComponent.prototype.convert = function () {
        var _this = this;
        this.appService.post(this.info, this.selectedCulture)
            .then(function (response) {
            if (response.success) {
                var info = new app_model_js_1.InfoModel();
                info.name = response.result.name;
                info.number = response.result.number;
                _this.data.broadcastChange(info);
            }
            else {
                _this.message = response.message;
            }
        });
    };
    return InputComponent;
}());
InputComponent = __decorate([
    core_1.Component({
        selector: 'app-input',
        templateUrl: '/js/app/html/input.html'
    }),
    __metadata("design:paramtypes", [app_service_js_1.AppService, data_service_js_1.DataService])
], InputComponent);
exports.InputComponent = InputComponent;
//# sourceMappingURL=input.component.js.map