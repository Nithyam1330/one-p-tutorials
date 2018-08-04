import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//user defined services

import { FacebookService } from '../common/socialMedia/facebook/facebook.service';
import { GmailService } from '../common/socialMedia/gmail/gmail.service';
import { TwitterService } from '../common/socialMedia/twitter/twitter.service';
import { GithubService } from '../common/socialMedia/github/github.service';
import { AuthService } from '../common/auth/auth.service';

@Injectable()
export class SignoutService {

  constructor(public route: Router,
    public _authService: AuthService,
    public _facebookService: FacebookService,
    public _gmailService: GmailService,
    public _twitterService: TwitterService,
    public _githubService: GithubService) { }

  logOutApplication(type: string) {
    let appType = type.toLowerCase();
    if (appType === "facebook") {
      console.log("in facebook logout");
      this._facebookService.logoutFacebook();
    } else if (appType === "google") {
      this._gmailService.logoutGmail();
    } else if (appType === "twitter") {
      this._twitterService.logoutTwitter();
    } else if (appType === "github") {
      this._githubService.logoutGithub();
    } else {
      this.logoutNithyam();
    }
  }

  logoutNithyam() {
    this._authService.activateBool = false;
    this.route.navigate(['sessions','signin'])
  }
}
