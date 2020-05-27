import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private tokenService: TokenService) {
    this.authSubject.next(this.tokenService.hasToken());
  }

  authenticate() {
    this.tokenService.setToken('tokenTeste');
    this.authSubject.next(this.tokenService.hasToken());
    return this.authSubject.asObservable();
  }
  
  getAuth(): Observable<boolean> {
    return this.authSubject.asObservable();
  }

  logOut() {
    this.authSubject.next(false);
    this.tokenService.removeToken();
  }



}
