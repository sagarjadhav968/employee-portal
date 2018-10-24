/**
 * Created by: Ketan Gote
 * Date: 22/10/2018
 * Organization: Individual	
 */
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { StatewiseRatioService } from '../../services/statewiseratio.service';
import { Ratiomodel } from './../../models/ratiomodel.model';

@Component(
{
	selector: 'malefemaleratio',
	templateUrl: 'malefemaleratio.component.html'
})
export class MalefemaleratioComponent implements OnInit {
	ratiomodel: Ratiomodel;
	genderId_Data:any;
	year_Data:any;
	grid_Data:any;
	successMsgData:any[]=[];
	
	constructor(private statewiseRatioService: StatewiseRatioService, private router: Router) {
		this.ratiomodel = new Ratiomodel();
	    this.genderId_Data={"data":[{"gender":"Female","genderId":"1"},{"gender":"Male","genderId":"2"}]};
	    this.year_Data={"data":[{"year":"2010","yearId":"2010"},{"year":"2011","yearId":"2011"},{"year":"2012","yearId":"2012"},{"year":"2013","yearId":"2013"}]};
		this.grid_Data=[];
	}
	ngOnInit() {
	}
	
	onClick_btn(eventData:any) { 
		if(this.ratiomodel.genderId ==  '2') {
		  this.statewiseRatioService.male(this.ratiomodel.year, this.bindResponseForBtn_ZvE.bind(this), () => {});
		}else {
		  this.statewiseRatioService.female(this.ratiomodel.year, this.bindResponseForBtn_QoY.bind(this), () => {});
		}
	}
	private bindResponseForBtn_ZvE(response: any) {
	this.grid_Data=response.response;}
	private bindResponseForBtn_QoY(response: any) {
		this.grid_Data=response.response;
	} 
}

