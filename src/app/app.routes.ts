import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeComponent } from './employee.component';
import { NotFoundComponent } from './notFound.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeOverviewComponent } from "./employee-overview.component";
import { EmployeeProjectsComponent } from "./employee-projects.component";

//
import { LoginComponent } from './login.component';
import { CheckLoginGuard } from './guards/check-login.guard';
import { CheckSaveFormGuard } from './guards/check-save-form.guard';
const routing: Routes = [
    { path: '', component: HomeComponent },
    //redirectTo link
    //{ path:'', redirectTo: 'employee', pathMatch:"full" },
    // { path: 'employee', component: EmployeeComponent, canActivate: [CheckLoginGuard] },

    // { path: 'employee-detail/:id', component: EmployeeDetailComponent, canDeactivate: [CheckSaveFormGuard],
    { path: 'employee', component: EmployeeComponent },

    {
        path: 'employee-detail/:id', component: EmployeeDetailComponent,
        children: [
            // {path:'', redirectTo: 'employee-detail/:id', pathMatch:"full"},
            { path: 'overview', component: EmployeeOverviewComponent },
            { path: 'projects', component: EmployeeProjectsComponent }
        ]
    },
    { path: 'login', component: LoginComponent }
    // { path: '**', component: NotFoundComponent }
]

export const appRoutes = RouterModule.forRoot(routing);