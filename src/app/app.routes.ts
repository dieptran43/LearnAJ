import {Routes, RouterModule} from  '@angular/router';
import {HomeComponent} from './home.component';
import {EmployeeComponent } from './employee.component';
import {NotFoundComponent } from './notFound.component';

const routing: Routes = [
     { path:'',  component: HomeComponent },
    //redirectTo link
    //{ path:'', redirectTo: 'employee', pathMatch:"full" },
    { path:'employee', component: EmployeeComponent },
    { path:'**', component: NotFoundComponent}
]

export const appRoutes = RouterModule.forRoot(routing);