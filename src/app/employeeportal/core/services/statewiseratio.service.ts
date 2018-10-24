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
import { Stateinforesponse } from '../models/stateinforesponse.model';

@Injectable()
export class StatewiseRatioService extends HttpSubscriber {
	
	constructor(private httpClient: HttpClient) {
		super(); 
	}
	public female(year: String, onSuccess: (data: Stateinforesponse) => any, onFailure: (error: any) => any) {
		this.subscribe(this.httpClient.get<Stateinforesponse>(CORE_SERVICE_URL.STATEWISERATIO  +  '/female/'+year),  onSuccess, onFailure);
	}
	public male(year: String, onSuccess: (data: Stateinforesponse) => any, onFailure: (error: any) => any) {
		this.subscribe(this.httpClient.get<Stateinforesponse>(CORE_SERVICE_URL.STATEWISERATIO  +  '/male/'+year),  onSuccess, onFailure);
	}
}

