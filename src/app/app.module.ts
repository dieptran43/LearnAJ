import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TutorialComponent } from './tutorial.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './services/employee.service';
//bai 25 Login
import { LoginService } from './services/login.service';
import { CheckLoginGuard } from './guards/check-login.guard';
import { CheckSaveFormGuard } from './guards/check-save-form.guard';
//Ban loi ko tim thay trang
import { NotFoundComponent } from './notFound.component';
//
import { EmployeeDetailComponent } from './employee-detail.component';

//import Routing vao
import { appRoutes } from './app.routes';
//Nhung home component
import { HomeComponent } from './home.component';

import { EmployeeOverviewComponent } from './employee-overview.component';
import { EmployeeProjectsComponent } from './employee-projects.component';
//
import { LoginComponent } from './login.component';
///
import { EmployeeAddComponent } from './employee-add.component';
import { EmployeeEditComponent } from './employee-edit.component';



@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, appRoutes],
  declarations: [AppComponent, TutorialComponent, EmployeeComponent,
    HomeComponent, NotFoundComponent, EmployeeDetailComponent,
    EmployeeOverviewComponent, EmployeeProjectsComponent, LoginComponent,
    EmployeeAddComponent, EmployeeEditComponent],
  providers: [EmployeeService, LoginService, CheckLoginGuard, CheckSaveFormGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
