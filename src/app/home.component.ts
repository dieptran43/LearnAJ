import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'home_component',
    template: `<h1>This is Home Component</h1>
        <button (click)="goToEmployee()">Go to Employee</button>
    `
})

export class HomeComponent {
    constructor(private router: Router) {

    }

    goToEmployee() {
        this.router.navigate(['employee']);
    }

}