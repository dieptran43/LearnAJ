import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import  {Subscription} from 'rxjs';

@Component({
    selector: 'employee-detail-component',
    templateUrl: './app/employee-detail.component.html' 
})

export class EmployeeDetailComponent implements OnInit, OnDestroy {  
    public _id: number;
    public subscription: Subscription;
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    }
    ngOnInit() {
            this.subscription = this.activatedRoute.params.subscribe(param =>{
                this._id = param['id'];
                alert(this._id);
            });
        }

    goToEmployee() {
        this.router.navigate(['employee']);
    }

     ngOnDestroy() {
            this.subscription.unsubscribe();
        }

}