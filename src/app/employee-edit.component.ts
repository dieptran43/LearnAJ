import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from 'rxjs';
import { EmployeeService } from './services/employee.service';

@Component({
    selector: 'employee-edit-component',
    templateUrl: './app/employee-edit.component.html'
})

export class EmployeeEditComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: Subscription;
    public employees: any;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private employeeService: EmployeeService) {

    }
    ngOnInit() {
        //debugger;
        this.subscription = this.activatedRoute.params.subscribe(param => {
            this._id = param['id'];
            //alert(this._id);                 
        });
        this.employeeService.GetById(this._id).subscribe((respone: any) => {
            //alert(respone);
            this.employees = respone;
        }, error => {
            console.log("Loi API");
        });
    }

    goToEmployee() {
        //debugger;
        this.router.navigate(['employee']);
    }

    //Goi su kien SaveForm
    SaveForm(){
        this.employeeService.Update(this._id, this.employees).subscribe(respone =>{
            if(respone){
                alert('Ban da save thanh cong roi do');
                this.router.navigate(["employee"]);
            }
        })
    }

    ngOnDestroy() {
        //debugger;
        this.subscription.unsubscribe();
    }

}