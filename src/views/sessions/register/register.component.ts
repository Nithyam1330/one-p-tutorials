//pre defined 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

// user defined services
import { RegisterService } from '../../../services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	
    constructor(public route: Router,
      public _registerService: RegisterService) { }

    register(form: NgForm) {
      console.log("register form data : " + JSON.stringify(form.value));
      if (form.valid) {
        console.log("registeration form data  : " + JSON.stringify(form.value));
        if (form.value["password"] === form.value["rePassword"]) {
          
          this._registerService.registerFirebase(form.value["username"], form.value["password"], form.value["displayName"]);
        }
        else {
          alert("both password must be same ");
        }
      }
      else {
        alert("registration form failed ... Please fill all fields");
      }
    }
    goToLogin(form: NgForm) {
	this.route.navigate(['sessions','signin']);
    }

    ngOnInit() {
    
  }
}
