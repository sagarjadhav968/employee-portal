/**
 * Created by: Ketan Gote
 * Date: 22/10/2018
 * Organization: Individual	
 */
import { HttpClient } from '@angular/common/http';
import {HttpSubscriber} from '../../../shared/http.subsciber';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CORE_SERVICE_URL } from './core.service.constant';
import { Employeedto } from '../models/employeedto.model';
import { Employee } from '../models/employee.model';
import { Employeeresponse } from '../models/employeeresponse.model';

@Injectable()
export class EmployeeService extends HttpSubscriber {
	
	constructor(private httpClient: HttpClient) {
		super(); 
	}
	public FindAll(onSuccess: (data: Employeedto) => any, onFailure: (error: any) => any) {
		this.subscribe(this.httpClient.get<Employeedto>(CORE_SERVICE_URL.EMPLOYEE + '/findall/'),  onSuccess, onFailure);
	}
	public saveEmployee(emp: Employee, onSuccess: (data: Employeeresponse) => any, onFailure: (error: any) => any) {
		this.subscribe(this.httpClient.post(CORE_SERVICE_URL.EMPLOYEE + '/saveEmployee/', emp), onSuccess, onFailure);
	}
}

