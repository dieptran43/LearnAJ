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
var SuDungPipes = (function () {
    function SuDungPipes() {
        this.title = "BIEN Thanh chu hoa";
        this.today = Date.now();
        this.number = 0.1234;
        this.obj = { foo: 'bar', makert: 'cho bua', address: 'Ba Chieu', numbers: [1, 2, 3, 4, 5, 6] };
        //slice Pipes
        this.collection = ['anh', 'chi', 'co', 'di'];
        //Async pipes
        this.greeting = null;
        this.arrived = false;
        this.resolve = null;
        this.reset();
    }
    SuDungPipes.prototype.reset = function () {
        var _this = this;
        this.arrived = false;
        this.greeting = new Promise(function (resolve, reject) { _this.resolve = resolve; });
    };
    SuDungPipes.prototype.clicked = function () {
        if (this.arrived) {
            this.reset();
        }
        else {
            this.resolve('hi there!');
            this.arrived = true;
        }
    };
    SuDungPipes = __decorate([
        core_1.Component({
            selector: 'my_pipes',
            template: "\n    <h1>VD ve PIPES ne</h1>\n    <h3>Chu hoa: {{title | uppercase}}</h3>\n    <h3>Chu thuong: {{title | lowercase}}</h3>\n    <h3>Date: {{today | date | uppercase}}</h3>\n    <h3>Date: {{today | date:'medium'}}</h3>\n    <h3>Date: {{today | date:'shortTime'}}</h3>\n    <h3>Date: {{today | date: 'mmss'}}</h3>\n    <h3>Date: {{today | date: 'jms'}}</h3>\n    <br/>Format Percent\n    <h3>Percent: {{number | percent:'12.3-5'}}</h3>\n    <br/>Noi ve Async pipes\n<div>\n    <code>promise|async</code>: \n    <button (click)=\"clicked()\">{{ arrived ? 'Reset' : 'Resolve' }}</button>\n    <span>Wait for it... {{ greeting | async }}</span>\n  </div>\n<h2> Vi du ve Decimal Pipes</h2>\n<p>So: {{number | number:'2.7-9'}}</p>\n<h2> Vi du ve Object JSON to String JSON</h2>\n<p>{{obj | json}}</p>\n<h2> Vi du ve Slice pipes</h2>\n<ul>\n    <li *ngFor=\"let i of collection | slice:0:2\">{{i}}</li>\n</ul>\n    ",
            styles: ["\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], SuDungPipes);
    return SuDungPipes;
}());
exports.SuDungPipes = SuDungPipes;
//# sourceMappingURL=sudungPipes.component.js.map