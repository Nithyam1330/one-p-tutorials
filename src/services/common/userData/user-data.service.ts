import { Injectable } from '@angular/core';

@Injectable()
export class UserDataService {

  userName: string;
  userImageUrl: string;
  userEmail: string;
  providerId: string;

  constructor() {}

  setUserName(userNameInput: string) {
    this.userName = userNameInput;
  }

  getUserName() {
    return this.userName;
  }

  setUserImageUrl(userImageUrlInput: string) {
    this.userImageUrl = userImageUrlInput;
  }

  getUserImageUrl() {
    return this.userImageUrl;
  }

  setUserEmail(userEmailInput: string) {
    this.userEmail = userEmailInput;
  }

  getUserEmail() {
    return this.userEmail;
  }

  setProviderId(providerIdInput: string) {
    this.providerId = providerIdInput
  }

  getProviderId() {
    return this.providerId;
  }
}
