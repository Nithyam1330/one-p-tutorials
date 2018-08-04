import { Injectable } from '@angular/core';
import { Signin } from '../../models/signin/signin.model';
import { AngularFireAuth } from 'angularfire2/auth';

//user defined services
import { EmailVerificationService } from '../../services/email-verification/email-verification.service';
@Injectable()
export class SigninService {

  loginForm : Signin = new Signin();
  constructor(public fire: AngularFireAuth,
    public _emailVerificationService: EmailVerificationService) { }

  loginFirebase(usernameInput: string, passwordInput: string) {
    this.fire.auth.signInAndRetrieveDataWithEmailAndPassword(usernameInput, passwordInput).then(loginResponse => {
      console.log("login response : " + JSON.stringify(loginResponse));
      this._emailVerificationService.emailVerification(loginResponse);
    }).catch(error => {
      console.log("error login : " + JSON.stringify(error));
      console.log("error login : " + error.code);
      if (error.code === "auth/invalid-email") {
        alert(error.message);
      }
      else if (error.code === "auth/user-not-found") {
        alert(error.message);
      }
      else if (error.code === "auth/wrong-password"){
        alert(error.message);
      }
    })
  }

}
