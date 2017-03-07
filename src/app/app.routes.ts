import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeComponent } from './employee.component';
import { NotFoundComponent } from './notFound.component';
import { EmployeeDetailComponent } from './employee-detail.component';

const routing: Routes = [
    { path: '', component: HomeComponent },
    //redirectTo link
    //{ path:'', redirectTo: 'employee', pathMatch:"full" },
    { path: 'employee', component: EmployeeComponent },
    { path: 'employee-detail/:id', component: EmployeeDetailComponent },
    // { path: '**', component: NotFoundComponent }
]

export const appRoutes = RouterModule.forRoot(routing);