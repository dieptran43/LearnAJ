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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var EmployeeService = (function () {
    function EmployeeService(_http) {
        this._http = _http;
        this.apiURL = "http://58bcc96d022e81120031f759.mockapi.io/api/employees";
    }
    EmployeeService.prototype.GetList = function () {
        return this._http.get(this.apiURL).map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.GetById = function (id) {
        var uRL = this.apiURL + "/" + id;
        //debugger
        return this._http.get(uRL).map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.Update = function (id, data) {
        return this._http.put(this.apiURL + "/" + id, data).map(function (response) { return response.json(); });
    };
    EmployeeService.prototype.Add = function (data) {
        alert('Moi vao phuong thuc Add');
        return this._http.post(this.apiURL, data).map(function (response) { return response.json(); });
    };
    EmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map