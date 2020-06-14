import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import { User } from './user';
import { TokenService } from '../token/token.service';
import { UserForm } from 'src/app/pages/users/user-form/UserForm';
import { ProfileImage } from './profile-image';

const API_URL = 'http://localhost:5000/users';
const API_STATIC = 'http://localhost:5000/static/profile/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  loggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loggedUser: string;

  constructor(
    private tokenService: TokenService,
    private http: HttpClient
  ) { 
    this.loggedSubject.next(this.tokenService.hasToken());
    this.tokenService.hasToken() &&
      this.decodeAndNotify();
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  logOut() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
    this.loggedSubject.next(false);
  }

  decodeAndNotify() {
    const token = this.tokenService.getToken();
    const userGUID = jwt_decode(token).identity;
    
    this.http.get(API_URL + `/${userGUID}`)
      .subscribe(
        data => {
          const user = data as User;
          this.loggedUser = user.guid;
          this.userSubject.next(user);
        }
      );

  }

  getUserLogged() {
    return this.userSubject.asObservable();
  }

  getCurrentUser() {
    return this.loggedUser;
  }

  getUser(guid: string) {
    return this.http.get<User>(API_URL + `/${guid}`);
  }

  getUserImage(avatarImg: string) {
      return `${API_STATIC}/${avatarImg}`;
  }

  getUsers() {
    const token = this.tokenService.getToken();
    return this.http.get<User[]>(API_URL + '/');
  }

  getLogged() {
    return this.loggedSubject.asObservable();
  }

  getUserInitials(name: string) {
    const splittedName = name.split(' ');
    if(splittedName.length == 1){
      let str1 = splittedName[0].charAt(0).toUpperCase();
      let str2 = splittedName[0].charAt(1).toUpperCase();
      return str1 + str2;
    }
    
    if(splittedName.length > 1){
      let str1 = splittedName[0].charAt(0).toUpperCase();
      let str2 = splittedName[1].charAt(0).toUpperCase();
      return str1 + str2;
    }
  }

  setToken(token: string, refreshToken: string){
    this.tokenService.setToken(token, refreshToken);
    this.loggedSubject.next(this.tokenService.hasToken());
    this.decodeAndNotify();
  }

  createUser(user: UserForm, file: File){
    const formData = new FormData();
    let userActive = user.userActive ? 'true' : 'false';
    formData.append('username', user.username);
    formData.append('active', userActive);
    formData.append('profile.name', user.name);
    formData.append('profile.cellPhone', user.cellPhone);
    formData.append('role', user.role);
    formData.append('imageFile', file);

    return this.http
      .post(API_URL + '/new',
            formData,
            {
              observe: 'events',
              reportProgress: true
            }
      );
  }

  activateUser(guid: string, active: boolean) {
    return this.http
      .put(
        API_URL + `/${guid}/active`, 
        {active},
        {observe: 'response'}
      );
  }

  deleteUser(guid: string) {
    return this.http
      .delete(
        API_URL + `/${guid}`,
        {observe: 'response'}
      );
  }

  updateUser(user: UserForm, guid: string, file: File) {
    const formData = new FormData();
    formData.append('profile.name', user.name);
    formData.append('profile.cellPhone', user.cellPhone);
    formData.append('role', user.role);
    formData.append('imageFile', file);

    return this.http
      .put(API_URL + `/${guid}`,
              formData,
              {
                observe: 'events',
                reportProgress: true
              }
      );

  }

}
