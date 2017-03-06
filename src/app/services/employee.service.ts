import {Injectable}  from   '@angular/core';

export class EmployeeService{
    GetList(): any[] {
        let emplist: any[] =[
        {Id:1, Name:"A Diep 1"},
            {Id:2, Name:"A Diep 2"},
            {Id:3, Name:"A Diep 3"},
            {Id:4, Name:"A Diep 4"},
                {Id:5, Name:"A Diep 5"},
                 {Id:6, Name:"Almvgnfdsklgjhkdgfsh Diep 5"},
        ];
        return emplist;
    }
}