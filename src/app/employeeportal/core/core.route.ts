
import {Routes } from '@angular/router';
import { EmployeeregistrationComponent } from './components/employeeregistration/employeeregistration.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { MalefemaleratioComponent } from './components/malefemaleratio/malefemaleratio.component';
export const ROUTES: Routes = [
{
	    path: 'employee-registration', component: EmployeeregistrationComponent
},
{
	    path: 'employee-list', component: EmployeelistComponent
},
{
	    path: 'male-female-ratio', component: MalefemaleratioComponent
},
];

