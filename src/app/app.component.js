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
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.myBindData = "Day la Bind Data One way binding";
        this.imageSrc = "http://lorempixel.com/300/300";
        this.welcomeText = "Hay nhap gia tri mong muon";
        this.applyClass = true;
        this.blueTrue = false;
    }
    AppComponent.prototype.onClick = function () {
        console.log('Da click button');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>Hello {{name}}</h1><h2 style=\"color: red;\"> A Diep tu lam ne</h2>  \n  <my_tutorial></my_tutorial>\n  <my_bindData></my_bindData>  \n  <h1>{{myBindData}}</h1>\n  <img [src]=\"imageSrc\" />\n  <br/>Class binding va style binding\n  <h3 [class.redColor]=\"applyClass\"> Thong tin class Apply</h3>\n  <h1 [style.color]=\"blueTrue ?'blue':'yellow'\"> Noi dung thay doi theo binding style</h1>\n  \n  <input type=\"text\" [value]=\"welcomeText\"  #nameText/> \n  <button (mouseover)=\"onClick()\">Re chuot vao nhan qua</button>\n  <h2>Ban da nhap: {{nameText.value}}</h2>\n\n  <br/>Day la noi dung TWO WAY BINDING\n  <input type=\"text\" [(ngModel)]=\"fname\"/>\n  <input type=\"text\" [(ngModel)]=\"lname\"/>\n  Full name: {{fname}} {{lname}}\n\n  ",
            styles: ["\n    .redColor{\n      color: red;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map