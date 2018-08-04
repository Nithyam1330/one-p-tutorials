import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

//user defined services

import { UserDataService } from '../../userData/user-data.service';
import { AuthService } from '../../auth/auth.service';
@Injectable()
export class TwitterService {

  constructor(public angularFireAuth: AngularFireAuth,
    public route: Router,
    public _userDataService: UserDataService,
    public _authService: AuthService) { }

  twitterLogin() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then(twitterRes => {
      console.log("Twitter Result : " + JSON.stringify(twitterRes));
      this._userDataService.setUserName(twitterRes.user.displayName);
      this._userDataService.setUserImageUrl(twitterRes.user.photoURL);
      this._userDataService.setUserEmail(twitterRes.user.email);
      this._userDataService.setProviderId(twitterRes.user.providerData[0].providerId);
      this._authService.activateBool = true;
      this.route.navigate(['courses', 'home']);
    })
  }


  logoutTwitter() {
    this._authService.activateBool = false;
    this.route.navigate(['sessions', 'signin']);
    this.angularFireAuth.auth.signOut().then(signoutResTwitter => {
      console.log("signout of Twitter successfully " + JSON.stringify(signoutResTwitter));
    }).catch(signoutErrorTwitter => {
      console.log("signout of Twitter successfully " + JSON.stringify(signoutErrorTwitter));
    });
  }
}
