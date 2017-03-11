import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs';
import { EmployeeService } from './services/employee.service';

@Component({
    selector: 'employee-add-component',
    templateUrl: './app/employee-add.component.html'
})

export class EmployeeAddComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: Subscription;
    public employees: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private employeeService: EmployeeService) {

    }
    ngOnInit() {
        // //debugger;
        // this.subscription = this.activatedRoute.params.subscribe(param => {
        //     this._id = param['id'];
        //     //alert(this._id);
        //     this.employeeService.GetById(this._id).subscribe((respone: any) => {
        //         //alert(respone);
        //         this.employees = respone;
        //     }, error => {
        //         console.log("Loi API");
        //     });
        // });

        this.employees = [];

    }

    goToEmployee() {
        //debugger;
        this.router.navigate(['employee']);
    }

    AddForm(){
        this.employeeService.Add(this.employees).subscribe(response =>{
            if(response){
                alert('Theem moi thanh cong');
                this.router.navigate(['employee']);
            }
        })
    }

    ngOnDestroy() {
        //debugger;
        //this.subscription.unsubscribe();
    }

}