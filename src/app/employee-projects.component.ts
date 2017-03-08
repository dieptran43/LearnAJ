import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription } from 'rxjs';

@Component({
    selector:'employee-project-component',
    template:'<h2>Day la Component Project {{prParentId}}</h2>'
})

export class EmployeeProjectsComponent implements OnInit, OnDestroy {
      public prParentId: number;
      public sub: Subscription;

      //Ham khoi tao
      constructor(private router: Router, private activatedRoute: ActivatedRoute ){

      }
      
        ngOnInit() {
            this.sub = this.activatedRoute.parent.params.subscribe(param =>{
                this.prParentId = param["id"];
            });
        }

         ngOnDestroy() {
            this.sub.unsubscribe();
        }




}