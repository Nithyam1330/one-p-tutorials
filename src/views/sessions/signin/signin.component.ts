// angular imports

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

//user defined imports

import { UserDataService } from '../../../services/common/userData/user-data.service';
import { FacebookService } from '../../../services/common/socialMedia/facebook/facebook.service';
import { GmailService } from '../../../services/common/socialMedia/gmail/gmail.service';
import { TwitterService } from '../../../services/common/socialMedia/twitter/twitter.service';
import { GithubService } from '../../../services/common/socialMedia/github/github.service';
import { SigninService } from '../../../services/signin/signin.service';
import { LoaderService } from '../../../views/common/loader/loader.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(public route: Router,
    public _userDataService: UserDataService,
    public _facebookService: FacebookService,
    public _gmailService: GmailService,
    public _twitterService: TwitterService,
    public _githubService: GithubService,
    public _signinService: SigninService,
    public _loaderService: LoaderService) { }

  login(form: NgForm) {
   
    console.log("form data : " + JSON.stringify(form.value));
    if (form.valid) {
      console.log("valid form  :");
      this._signinService.loginFirebase(form.value["username"], form.value["password"]);
    }
    else {
      this._loaderService.showLoading();
      alert("enter all fields  :");
    }
  }
  register() {
    this.route.navigate(['sessions', 'register']);
  }

  loginWithFacebook() {
    console.log("facebook login");
    this._facebookService.facebookLogin();
  }

  loginWithGoogle() {
    console.log("Google Login");
    this._gmailService.gmailLogin();
  }

  loginWithTwitter() {
    console.log("Twiiter Login");
    this._twitterService.twitterLogin();
  }

  loginWithGithub() {
    console.log("Github Login");
    this._githubService.githubLogin();
  }
  ngOnInit() {
  }

}
