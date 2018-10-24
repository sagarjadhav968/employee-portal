import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AmexioWidgetModule, AmexioChartsModule, AmexioDashBoardModule, AmexioMapModule} from 'amexio-ng-extensions';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeregistrationComponent } from './components/employeeregistration/employeeregistration.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { MalefemaleratioComponent } from './components/malefemaleratio/malefemaleratio.component';
import { EmployeeService } from './services/employee.service';
import { DepartmentService } from './services/department.service';
import { CountryService } from './services/country.service';
import { StateService } from './services/state.service';
import { StatewiseRatioService } from './services/statewiseratio.service';
import { ROUTES } from './core.route';

@NgModule({
	  imports: [
	    CommonModule, FormsModule,
	    HttpClientModule,
	    RouterModule.forChild(ROUTES),
	    AmexioWidgetModule,
	    AmexioChartsModule,
	    AmexioDashBoardModule,
	    AmexioMapModule	
	  ],
	  exports: [RouterModule],
	  declarations: [
	    EmployeeregistrationComponent,
	    EmployeelistComponent,
	    MalefemaleratioComponent,
	  ],
	  providers: [
	    EmployeeService,
	    DepartmentService,
	    CountryService,
	    StateService,
	    StatewiseRatioService,
	  ]
})
export class CoreModule {
}
