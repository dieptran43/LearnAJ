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
var core_1 = require('@angular/core');
var login_service_1 = require('./services/login.service');
var AppComponent = (function () {
    function AppComponent(loginService) {
        this.loginService = loginService;
        this.name = "angular 2";
        this.cities = [{ Id: 1, Name: "Anh Diep" }, { Id: 2, Name: "Chi Duong" }, { Id: 3, Name: "Ba Tam" }];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this.loginService.IsLogined();
        // alert('Toi ben OnInit chay gia tri IsLogined la :' + this.isLoggedIn );
    };
    AppComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    //1 ham Logout
    AppComponent.prototype.Logout = function () {
        alert('Ban da logout roi nhe ku');
        this.loginService.setLogin(false);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/app.component.html',
            styles: ["\n    .redColor{\n      color: red;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map