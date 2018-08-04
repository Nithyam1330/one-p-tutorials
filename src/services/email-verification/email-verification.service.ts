import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

//user defined services

import { AuthService } from '../../services/common/auth/auth.service';
import { UserDataService } from '../../services/common/userData/user-data.service';

@Injectable()
export class EmailVerificationService {

  constructor(public fire: AngularFireAuth,
    public route: Router,
    public _authService: AuthService,
    public _userDataService: UserDataService) { }

  emailVerification(emailVerfiyResponse: any, displayName?: string) {
    console.log("FIREBASE SERVICE "+firebase.auth().currentUser.emailVerified);
    let user = firebase.auth().currentUser;
    if (user.displayName === null) {
      this.updateUserProfile(user, displayName);
    }
    if (user.emailVerified) {
      alert("user created successfully");
      this._userDataService.setUserName(user.displayName);
      this._userDataService.setUserEmail(user.email);
      this._userDataService.setProviderId("Nithyam Tutorials");
      this._userDataService.setUserImageUrl(user.photoURL);
      this._authService.activateBool = true;
      this.route.navigate(['courses', 'home']);
    }
    else {
      let actionCodeSettings = {
        url: 'http://localhost:4200',
        handleCodeInApp: true
      }
      firebase.auth().currentUser.sendEmailVerification(actionCodeSettings).then(res => {
        alert("verification mail is sent to your mail ... Please verify thhe email ");
        console.log("after verify : " + JSON.stringify(firebase.auth().currentUser));
      }).catch(error => {
        console.log("error : " + error);
      })
    }
  }

  updateUserProfile(userInput, displayNameInput) {
    userInput.updateProfile({
      displayName: displayNameInput
    }).then(updateResponse => {
      console.log("updated successfully");
      }).catch(error => {
        console.log("update failed");
      })
  }
}
