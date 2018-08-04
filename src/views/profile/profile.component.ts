import { Component, OnInit } from '@angular/core';


//user defined services

import { UserDataService } from '../../services/common/userData/user-data.service';
import { SignoutService } from '../../services/signout/signout.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileObject: {
    userName: string,
    photoURL: string,
    email: string,
    providerId: string
  } = {
    userName: "",
    photoURL: "",
    email: "",
    providerId: ""
  }
  constructor(public _userDataService: UserDataService,
    public _signoutService: SignoutService) { }

  logOut() {
    this._signoutService.logOutApplication(this.profileObject.providerId);
  }

  ngOnInit() {
    this.profileObject.userName = this._userDataService.getUserName();
    this.profileObject.photoURL = this._userDataService.getUserImageUrl();
    this.profileObject.email = this._userDataService.getUserEmail();
    this.profileObject.providerId = (this._userDataService.getProviderId()).split(".")[0];

    console.log("this.profileObject.email: " + this.profileObject.email);
    console.log("this.profileObject.userName: " + this.profileObject.userName);
  }

}
