import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { TutorialComponent } from './tutorial.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './services/employee.service';
//Ban loi ko tim thay trang
import { NotFoundComponent } from './notFound.component';
//
import { EmployeeDetailComponent } from './employee-detail.component';


//import Routing vao
import {appRoutes} from './app.routes';
//Nhung home component
import {HomeComponent } from './home.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule , appRoutes],
  declarations: [ AppComponent, TutorialComponent, EmployeeComponent,
     HomeComponent, NotFoundComponent, EmployeeDetailComponent ],
  providers: [EmployeeService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
