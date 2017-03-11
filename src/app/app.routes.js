"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var employee_component_1 = require('./employee.component');
var employee_detail_component_1 = require('./employee-detail.component');
var employee_overview_component_1 = require("./employee-overview.component");
var employee_projects_component_1 = require("./employee-projects.component");
//
var login_component_1 = require('./login.component');
//Add and edit an Employee
var employee_add_component_1 = require('./employee-add.component');
var employee_edit_component_1 = require('./employee-edit.component');
var routing = [
    { path: '', component: home_component_1.HomeComponent },
    //redirectTo link
    //{ path:'', redirectTo: 'employee', pathMatch:"full" },
    // { path: 'employee', component: EmployeeComponent, canActivate: [CheckLoginGuard] },
    { path: 'employee', component: employee_component_1.EmployeeComponent },
    { path: 'employee-edit/:id', component: employee_edit_component_1.EmployeeEditComponent },
    { path: 'employee-add', component: employee_add_component_1.EmployeeAddComponent },
    {
        path: 'employee-detail/:id', component: employee_detail_component_1.EmployeeDetailComponent,
        children: [
            // {path:'', redirectTo: 'employee-detail/:id', pathMatch:"full"},
            { path: 'overview', component: employee_overview_component_1.EmployeeOverviewComponent },
            { path: 'projects', component: employee_projects_component_1.EmployeeProjectsComponent }
        ]
    },
    { path: 'login', component: login_component_1.LoginComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.routes.js.map