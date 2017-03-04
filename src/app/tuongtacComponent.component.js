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
var TuongTacComponent = (function () {
    function TuongTacComponent() {
        this.onVote = new core_1.EventEmitter();
        this.voted = false;
    }
    TuongTacComponent.prototype.voteFunc = function (agree) {
        this.voted = true;
        this.onVote.emit(agree);
    };
    TuongTacComponent.prototype.setName = function (name) {
        this.nameInput = name;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], TuongTacComponent.prototype, "nameInput", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TuongTacComponent.prototype, "onVote", void 0);
    TuongTacComponent = __decorate([
        core_1.Component({
            selector: "my_TuongTacComponent",
            template: "\n    <h2> Vi du voi Input Component</h2>\n  \n    <h1> {{nameInput}}</h1>\n    <button [disabled]=\"voted\" (click)=\"voteFunc(true)\"> Agree </button>\n    <button [disabled]=\"voted\" (click)=\"voteFunc(false)\"> Disgree </button>\n    Result :{{voted}}\n    ",
            styles: ["\n    "],
        }), 
        __metadata('design:paramtypes', [])
    ], TuongTacComponent);
    return TuongTacComponent;
}());
exports.TuongTacComponent = TuongTacComponent;
//# sourceMappingURL=tuongtacComponent.component.js.map