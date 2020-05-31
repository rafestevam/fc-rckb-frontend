import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { Token } from '../token/token';

const API_URL = 'http://localhost:5000/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private userService: UserService,
    private http: HttpClient
  ) { }

  authenticate(username: string, password: string) {
    return this.http
      .post(API_URL + '/auth', {username, password}, {observe: 'response'})
      .pipe(tap(
        res => {
          const authToken = res.body as Token;
          this.userService.setToken(authToken.access_token);
        }
      ));

  }

}
