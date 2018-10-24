/**
 * Created by: Ketan Gote
 * Date: 22/10/2018
 * Organization: Individual	
 */
export class Ratiomodel
{
	
	genderId: string;
	year: string;
	
	constructor() { 
	}
	
	set setGenderId(value: string) {
		this.genderId = value;
	}
	get getGenderId() : string {
		return this.genderId;
	}
	set setYear(value: string) {
		this.year = value;
	}
	get getYear() : string {
		return this.year;
	}
	
}
