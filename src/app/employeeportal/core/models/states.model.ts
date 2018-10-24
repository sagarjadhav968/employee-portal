/**
 * Created by: Ketan Gote
 * Date: 22/10/2018
 * Organization: Individual	
 */
export class States
{
	
	stateId: string;
	stateName: string;
	countrId: string;
	countryName: string;
	
	constructor() { 
	}
	
	set setStateId(value: string) {
		this.stateId = value;
	}
	get getStateId() : string {
		return this.stateId;
	}
	set setStateName(value: string) {
		this.stateName = value;
	}
	get getStateName() : string {
		return this.stateName;
	}
	set setCountrId(value: string) {
		this.countrId = value;
	}
	get getCountrId() : string {
		return this.countrId;
	}
	set setCountryName(value: string) {
		this.countryName = value;
	}
	get getCountryName() : string {
		return this.countryName;
	}
	
}
