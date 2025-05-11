import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './Components/PersonCompontents/add-employee/add-employee.component';
import { EmployeeComponent } from './Components/PersonCompontents/employee/employee.component';
import { EmployeedetialsComponent } from './Components/PersonCompontents/employeedetials/employeedetials.component';
import { UpdateEmployeeComponent } from './Components/PersonCompontents/update-employee/update-employee.component';


const routes: Routes = [
  {path:'', redirectTo:'/employee', pathMatch:'full'},
  {path:'employee', component: EmployeeComponent },
  {path:'employee/add', component:AddEmployeeComponent  },
  {path:'employee/update/:pID', component: UpdateEmployeeComponent },
  {path:'employee/details/:pID', component: EmployeedetialsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


