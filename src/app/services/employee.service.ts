import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService {
    private apiURL = "http://58bcc96d022e81120031f759.mockapi.io/api/employees/";
    constructor(private _http: Http) {

    }
    GetList(): Observable<any[]> {
        return this._http.get(this.apiURL).map((response: Response) => response.json());
    }

     GetById(id: number): Observable<any> {
        let uRL = this.apiURL +id;
        //debugger
        return this._http.get(uRL).map((response: Response) => response.json());
    }

    Update(id: number, data: any): Observable<any> {
        return this._http.put(this.apiURL + id,data).map((response: Response) =>response.json())
    }

    Add(data: any){
        alert('Moi vao phuong thuc Add');
        return this._http.post(this.apiURL, data).map((response: Response)=>response.json())
    }

    Delete(id: number){
        return this._http.delete(this.apiURL + id).map((respone: Response) =>respone.json)
    }

    Search(keyWord: string)
    {
        return this._http.get(this.apiURL + "?search="+ keyWord).map((response: Response)=> response.json());
    }

}