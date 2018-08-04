import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router'
//user defined services

import { UserDataService } from '../../userData/user-data.service';
import { AuthService } from '../../auth/auth.service';
@Injectable()
export class GmailService {

  constructor(public angularFireAuth: AngularFireAuth,
    public route: Router,
    public _userDataService: UserDataService,
    public _authService: AuthService) { }

  gmailLogin() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(googleRes => {
      console.log("Google Result : " + JSON.stringify(googleRes));
      this._userDataService.setUserName(googleRes.user.displayName);
      this._userDataService.setUserImageUrl(googleRes.user.photoURL);
      this._userDataService.setUserEmail(googleRes.user.email);
      this._userDataService.setProviderId(googleRes.user.providerData[0].providerId);
      this._authService.activateBool = true;
      this.route.navigate(['courses', 'home']);
    })
  }


  logoutGmail() {
    this._authService.activateBool = false;
    this.route.navigate(['sessions', 'signin']);
    this.angularFireAuth.auth.signOut().then(signoutResGmail => {
      console.log("signout of gmail successfully " + JSON.stringify(signoutResGmail));
    }).catch(signoutErrorGmail => {
      console.log("signout of gmail successfully " + JSON.stringify(signoutErrorGmail));
    });
  }

}
