import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { EmployeeService } from './services/employee.service';


@Component({
    selector: "my_employee",
    templateUrl: "./app/employee.component.html",
})

export class EmployeeComponent implements OnInit {
    public employees: any[];
    public pages: number[];
    public currentPage: number;

    constructor(private employeeService: EmployeeService,
        private router: Router, private activatedRouter: ActivatedRoute) {

    }

    ngOnInit() {
        this.activatedRouter.queryParams.subscribe(param=>{
            this.currentPage = param['pageNumber'] || 1;
            alert(this.currentPage);
        })

        this.employeeService.GetList().subscribe((respone: any[]) => {
            this.employees = respone;            
        }, error =>{
            console.log("Loi API");
        });
        this.pages= [1,2,3,4,5,6,7,8,9];

    }
}