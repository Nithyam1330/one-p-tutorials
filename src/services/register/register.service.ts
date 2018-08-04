import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

//user defined
import { Register } from '../../models/register/register.model';

//user defined services
import { EmailVerificationService } from '../../services/email-verification/email-verification.service';
@Injectable()
export class RegisterService {

  registerData: Register = new Register();
  constructor(public fire: AngularFireAuth,
    public _emailVerificationService: EmailVerificationService) { }

  registerFirebase(usernameInput: string, passwordInput: string, displayNameInput: string) {
    this.fire.auth.createUserWithEmailAndPassword(usernameInput, passwordInput).then(registerResponse => {
      console.log("register response : " + registerResponse);
      alert("verification mail is sent to your mail ");
      this._emailVerificationService.emailVerification(registerResponse, displayNameInput);
    }).catch(registerError => {
      console.log("error register : " + JSON.stringify(registerError));
      console.log("error register : " + registerError.code);
      if (registerError.code === "auth/invalid-email") {
        alert(registerError.message);
      }
      else if (registerError.code === "auth/user-not-found") {
        alert(registerError.message);
      }
      else if (registerError.code==="auth/weak-password"){
        alert(registerError.message);
      }
      else if (registerError.code === "auth/email-already-in-use") {
        alert(registerError.message);
      }
    })
  }
}
