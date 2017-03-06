import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
    selector: "my_employee",
    templateUrl: "./app/employee.component.html",
})

export class EmployeeComponent implements OnInit {
    public employees: any[];
    constructor(private employeeService: EmployeeService) {

    }

    ngOnInit() {
        this.employeeService.GetList().subscribe((respone: any[]) => {
            this.employees = respone;            
        }, error =>{
            console.log("Loi API");
        });

    }
}