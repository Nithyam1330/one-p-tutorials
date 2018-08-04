// angular imports 

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

//user defined imports

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//user defined services

import { AuthService } from '../services/common/auth/auth.service';
import { CardDetailsService } from '../services/common/cards/card-details.service';
import { UserDataService } from '../services/common/userData/user-data.service';
import { FacebookService } from '../services/common/socialMedia/facebook/facebook.service';
import { GmailService } from '../services/common/socialMedia/gmail/gmail.service';
import { TwitterService } from '../services/common/socialMedia/twitter/twitter.service';
import { GithubService } from '../services/common/socialMedia/github/github.service';
import { LoaderService } from '../views/common/loader/loader.service';
import { SignoutService } from '../services/signout/signout.service';

//user defined components

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { TopbarComponent } from '../views/topbar/topbar.component';
import { ProfileComponent } from '../views/profile/profile.component';
import { LoaderComponent } from '../views/common/loader/loader.component';

// firbase configuration

var config = {
  apiKey: "AIzaSyDvYgSL--NM7XhSSskAGWVQj4eLPTx6O8U",
  authDomain: "social-apps-angular-web.firebaseapp.com",
  databaseURL: "https://social-apps-angular-web.firebaseio.com",
  projectId: "social-apps-angular-web",
  storageBucket: "social-apps-angular-web.appspot.com",
  messagingSenderId: "258533520201"
}

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
    TopbarComponent,
    ProfileComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    CardDetailsService,
    UserDataService,
    FacebookService,
    GmailService,
    TwitterService,
    GithubService,
    LoaderService,
    SignoutService
  ],
  entryComponents: [
    LoaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
