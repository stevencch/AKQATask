"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms"); // <-- NgModel lives here
var http_1 = require("@angular/http");
var app_component_js_1 = require("./app.component.js");
var convertor_component_js_1 = require("./convertor.component.js");
var info_component_js_1 = require("./info.component.js");
var input_component_js_1 = require("./input.component.js");
var output_component_js_1 = require("./output.component.js");
var app_service_js_1 = require("./app.service.js");
var data_service_js_1 = require("./data.service.js");
var app_routing_module_js_1 = require("./app-routing.module.js");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_js_1.AppRoutingModule
        ],
        declarations: [
            app_component_js_1.AppComponent,
            convertor_component_js_1.ConvertorComponent,
            info_component_js_1.InfoComponent,
            input_component_js_1.InputComponent,
            output_component_js_1.OutputComponent
        ],
        providers: [app_service_js_1.AppService, data_service_js_1.DataService],
        bootstrap: [app_component_js_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map