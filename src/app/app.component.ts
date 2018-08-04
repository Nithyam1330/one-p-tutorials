import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
logoImage:any;
	constructor(){
		this.logoImage="../assets/logo.jpg";
	}
}
