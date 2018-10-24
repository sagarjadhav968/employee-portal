/**
 * Created by: Ketan Gote
 * Date: 22/10/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../services/state.service';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from './../../models/employee.model';

@Component(
{
	selector: 'employeeregistration',
	templateUrl: 'employeeregistration.component.html'
})
export class EmployeeregistrationComponent implements OnInit {
	employee: Employee;
	genderId_Data:any;
	stateId_Data:any;
	errorMsgData:any[]=[];
	successMsgData:any[]=[];
	
	constructor(private stateService: StateService, private employeeService: EmployeeService, private router: Router) {
		this.employee = new Employee();
	    this.genderId_Data={"data":[{"genderId":"1","gender":"female"},{"genderId":"2","gender":"male"}]};
		this.stateId_Data=[];
	}
	ngOnInit() {
	}
	
	onSingleSelect_countryId(eventData:any) { 
		this.findbycountryid(eventData);
	}
	private findbycountryid(eventData: any) {
	  this.stateService.findbycountryid(this.employee.countryId, this.bindResponseForFindbycountryid_yZf.bind(this), () => {});
	}
	private bindResponseForFindbycountryid_yZf(response: any) {
		this.stateId_Data=response.response;
	}
	 
	onClick_save(eventData:any) { 
		this.saveEmployee(eventData);
	}
	private saveEmployee(eventData: any) {
		
	  this.employeeService.saveEmployee(this.employee, this.bindResponseForSaveEmployee_hec.bind(this), () => {});
	}
	private bindResponseForSaveEmployee_hec(response: any) {
		if(response.success) {
			this.router.navigate(['employeeportal/core/employee-list']);
		}else {
			this.errorMsgData.push(response.message);
			
		}
	}
	 
}

