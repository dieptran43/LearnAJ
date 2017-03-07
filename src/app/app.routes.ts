import {Routes, RouterModule} from  '@angular/router';
import {HomeComponent} from './home.component';
import {EmployeeComponent } from './employee.component';

const routing: Routes = [
    { path:'', component: HomeComponent },
    { path:'employee', component: EmployeeComponent },
]

export const appRoutes = RouterModule.forRoot(routing);