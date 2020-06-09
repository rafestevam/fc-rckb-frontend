import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import { User } from './user';
import { TokenService } from '../token/token.service';

const API_URL = 'http://localhost:5000/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  loggedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

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
          this.userSubject.next(user);
        }
      );
  }

  getUserLogged() {
    return this.userSubject.asObservable();
  }

  getUser(guid: string) {
    return this.http.get<User>(API_URL + `/${guid}`);
  }

  getUsers() {
    const token = this.tokenService.getToken();
    return this.http.get<User[]>(API_URL + '/');
  }

  getLogged() {
    return this.loggedSubject.asObservable();
  }

  setToken(token: string){
    this.tokenService.setToken(token);
    this.loggedSubject.next(this.tokenService.hasToken());
    this.decodeAndNotify();
  }

  activateUser(guid: string, active: boolean) {
    return this.http
      .put(
        API_URL + `/${guid}/active`, 
        {active},
        {observe: 'response'}
      );
  }

  deleteUser(guid: string){
    return this.http.delete(API_URL + `${guid}`);
  }

}
