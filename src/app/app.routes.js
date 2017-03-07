"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var employee_component_1 = require('./employee.component');
var notFound_component_1 = require('./notFound.component');
var routing = [
    { path: '', component: home_component_1.HomeComponent },
    //redirectTo link
    //{ path:'', redirectTo: 'employee', pathMatch:"full" },
    { path: 'employee', component: employee_component_1.EmployeeComponent },
    { path: '**', component: notFound_component_1.NotFoundComponent }
];
exports.appRoutes = router_1.RouterModule.forRoot(routing);
//# sourceMappingURL=app.routes.js.map