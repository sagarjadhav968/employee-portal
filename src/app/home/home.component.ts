import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomeComponent {
  sideNavMenu: any;
  topNavMenu: any;  
	
constructor(private _router : Router) {    
  this.sideNavMenu = [{"text":"Employee Portal","expand":false,"id":null,"leaf":false,"icon":"fa fa-users","routerLink":null,"children":[{"text":"Employee Registration","expand":false,"id":"b74c9c9b-c1a1-4f57-a8bc-bcb426e17bcd","leaf":true,"icon":"fa fa-user","routerLink":"employeeportal/core/employee-registration","children":null},{"text":"Employee list","expand":false,"id":"fedcc398-32c0-445f-b7da-7953173b95fe","leaf":true,"icon":"fa fa-users","routerLink":"employeeportal/core/employee-list","children":null}]}]; 
  this.topNavMenu = [{"text":"Statistics","expand":false,"id":null,"leaf":false,"icon":"fa fa-venus-double","routerLink":null,"children":[{"text":"Male female ratio","expand":false,"id":"b2500db9-b658-4e62-afee-0d40b725dbbf","leaf":true,"icon":"fa fa-venus-double","routerLink":"employeeportal/core/male-female-ratio","children":null}]}]; 
}
sideNavClick(data: any) {
   if( data.children==null && data.routerLink) {
     this._router.navigate([data.routerLink]);
    }
  }

topNavClick(data: any) {
   if( data.data.node.children==null && data.data.node.routerLink) {
     this._router.navigate([data.data.node.routerLink]);
    }
  }
}
