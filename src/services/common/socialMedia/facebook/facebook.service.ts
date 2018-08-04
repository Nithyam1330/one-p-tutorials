import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

//user defined services

import { UserDataService } from '../../userData/user-data.service';
import { AuthService } from '../../auth/auth.service';
@Injectable()
export class FacebookService {

  constructor(public angularFireAuth: AngularFireAuth,
    public route:Router,
    public _userDataService: UserDataService,
    public _authService: AuthService) { }

  facebookLogin() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(fbRes => {
      console.log("Facebook Result : " + JSON.stringify(fbRes));
      console.log("displayName :" + fbRes.user.displayName);
      this._userDataService.setUserName(fbRes.user.displayName);
      this._userDataService.setUserImageUrl(fbRes.user.photoURL);
      this._userDataService.setUserEmail(fbRes.user.email);
      this._userDataService.setProviderId(fbRes.user.providerData[0].providerId);
      this._authService.activateBool = true;
      this.route.navigate(['courses', 'home']);
    }).catch(error => {
      if (error.code === "auth/web-storage-unsupported") {
        alert(error.message);
      }
    })
  }

  logoutFacebook() {
    this._authService.activateBool = false;
    this.route.navigate(['sessions', 'signin']);
    this.angularFireAuth.auth.signOut().then(signoutResFb => {
      console.log("signout of facebook successfully " + JSON.stringify(signoutResFb));
    }).catch(signoutErrorFb => {
      console.log("signout of facebook successfully " + JSON.stringify(signoutErrorFb));
      });
  }
}
