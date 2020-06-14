import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { TokenRefresh } from './token';

const KEY = 'fcToken';
const KEY_REFR = 'fcTokenRefresh';
const API_REFRESH_TOKEN = 'http://localhost:5000/users/auth/refresh';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  tokenValid: true;

  constructor(private http: HttpClient) { }

  hasToken() {
    return !!this.getToken();
  }

  setToken(token: string, refreshToken: string) {
    window.localStorage.setItem(KEY, token);
    window.localStorage.setItem(KEY_REFR, refreshToken);
  }

  getToken() {
    return window.localStorage.getItem(KEY);
  }

  getTokenRefresh() {
    return window.localStorage.getItem(KEY_REFR);
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
    window.localStorage.removeItem(KEY_REFR);
  }

  refreshToken() {
    return this.http
      .post(
        API_REFRESH_TOKEN,
        {},
        {
          headers: {
            "Authentication": "Bearer " + this.getTokenRefresh()
          },
          observe: 'response'
        }
      )
      .pipe(tap(res => {
        const authToken = res.body as TokenRefresh;
        this.setToken(authToken.access_token, this.getTokenRefresh())
      }));
  }
  
}

