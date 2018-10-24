/**
 * Created by: Ketan Gote
 * Date: 22/10/2018
 * Organization: Individual	
 */
import { Statewisecount } from './statewisecount.model';
export class Stateinforesponse
{
	
	success: boolean;
	message: string;
	response: Statewisecount[]; 
	
	constructor() { 
		this.response = []; 
	}
	
	set setSuccess(value: boolean) {
		this.success = value;
	}
	get getSuccess() : boolean {
		return this.success;
	}
	set setMessage(value: string) {
		this.message = value;
	}
	get getMessage() : string {
		return this.message;
	}
	
}
