/**
 * Created by: Ketan Gote
 * Date: 22/10/2018
 * Organization: Individual	
 */
export class Statewisecount
{
	
	stateName: string;
	birthCount: number;
	
	constructor() { 
	}
	
	set setStateName(value: string) {
		this.stateName = value;
	}
	get getStateName() : string {
		return this.stateName;
	}
	set setBirthCount(value: number) {
		this.birthCount = value;
	}
	get getBirthCount() : number {
		return this.birthCount;
	}
	
}
