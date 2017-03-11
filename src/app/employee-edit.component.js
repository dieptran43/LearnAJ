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
var router_1 = require("@angular/router");
var employee_service_1 = require('./services/employee.service');
var EmployeeEditComponent = (function () {
    function EmployeeEditComponent(router, activatedRoute, employeeService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.employeeService = employeeService;
    }
    EmployeeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //debugger;
        this.subscription = this.activatedRoute.params.subscribe(function (param) {
            _this._id = param['id'];
            //alert(this._id);                 
        });
        this.employeeService.GetById(this._id).subscribe(function (respone) {
            //alert(respone);
            _this.employees = respone;
        }, function (error) {
            console.log("Loi API");
        });
    };
    EmployeeEditComponent.prototype.goToEmployee = function () {
        //debugger;
        this.router.navigate(['employee']);
    };
    //Goi su kien SaveForm
    EmployeeEditComponent.prototype.SaveForm = function () {
        var _this = this;
        this.employeeService.Update(this._id, this.employees).subscribe(function (respone) {
            if (respone) {
                alert('Ban da save thanh cong roi do');
                _this.router.navigate(["employee"]);
            }
        });
    };
    EmployeeEditComponent.prototype.ngOnDestroy = function () {
        //debugger;
        this.subscription.unsubscribe();
    };
    EmployeeEditComponent = __decorate([
        core_1.Component({
            selector: 'employee-edit-component',
            templateUrl: './app/employee-edit.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, employee_service_1.EmployeeService])
    ], EmployeeEditComponent);
    return EmployeeEditComponent;
}());
exports.EmployeeEditComponent = EmployeeEditComponent;
//# sourceMappingURL=employee-edit.component.js.map