import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpClient } from '@angular/common/http';
import { TokenService } from '../token/token.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

const API_URL = 'http://localhost:5000/users';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

    if(this.tokenService.hasToken()){
      const token = this.tokenService.getToken();
      req = req.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + token
        }
      });
    }
    return next.handle(req)
      .pipe(catchError( (error: HttpErrorResponse) => {
        //Se erro for relacionado ao refresh do token
        // - Deslogar da aplicação
        // - Retornar request
        if (this.tokenService.hasToken() && req.url.includes('refresh')){
          this.tokenService.removeToken();
          return throwError(error);
          //return Observable.throw(error);
        }

        //Se erro for diferente de 401, retornar o erro
        if(error.status !== 401){
          return throwError(error);
          //return Observable.throw(error);
        }

        //Em caso de token expirado, solicitar novo token ao serviço
        //de token
        if(this.tokenService.hasToken()){
          this.tokenService
            .refreshToken()
            .subscribe(()=>{
              console.log('TOKEN RENOVADO: ' + this.tokenService.getToken());
              req = req.clone({
                setHeaders: {
                  'Authorization': 'Bearer ' + this.tokenService.getToken()
                }
              });
            },
            err => {
              this.tokenService.removeToken();
              return throwError(err);
            });
            return next.handle(req);
        }

      }))

  }

}
