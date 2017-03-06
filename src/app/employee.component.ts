import {Component, OnInit } from '@angular/core';
import {EmployeeService} from './services/employee.service';

@Component({
    selector:"my_employee",
    templateUrl:"./app/employee.component.html",
    providers:[EmployeeService]

})

export class EmployeeComponent implements OnInit{
    public employees : any[];
    constructor(private employeeService : EmployeeService){

    }

    ngOnInit(){
        this.employees = this.employeeService.GetList();
    }
    


}