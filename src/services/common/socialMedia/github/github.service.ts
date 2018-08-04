import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router'
//user defined services

import { UserDataService } from '../../userData/user-data.service';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class GithubService {

  constructor(public angularFireAuth: AngularFireAuth,
    public route: Router,
    public _userDataService: UserDataService,
    public _authService: AuthService) { }

  githubLogin() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider()).then(gitRes => {
      console.log("Google Result : " + JSON.stringify(gitRes));
      this._userDataService.setUserName(gitRes.user.displayName);
      this._userDataService.setUserImageUrl(gitRes.user.photoURL);
      this._userDataService.setUserEmail(gitRes.user.email);
      this._userDataService.setProviderId(gitRes.user.providerData[0].providerId);
      this._authService.activateBool = true;
      this.route.navigate(['courses', 'home']);
    })
  }


  logoutGithub() {
    this._authService.activateBool = false;
    this.route.navigate(['sessions', 'signin']);
    this.angularFireAuth.auth.signOut().then(signoutResGit => {
      console.log("signout of Github successfully " + JSON.stringify(signoutResGit));
    }).catch(signoutErrorGit => {
      console.log("signout of Github successfully " + JSON.stringify(signoutErrorGit));
    });
  }
}
