import { BasicAuthenticationService } from './../basic-authentication.service';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HttpIntercepterBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthenticationService : BasicAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    // TODO: hardcode the authHeader first, remove it once JWT is developed
    console.log('intercept.')
    // let username = 'test'
    // let password = 'password'
    // //let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();

    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser()

    console.log('basicAuthHeaderString: ', basicAuthHeaderString)
    console.log('username: ', username)

    if(basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders : {
            Authorization : basicAuthHeaderString
          }
        })
    }
    return next.handle(request);
  }


}