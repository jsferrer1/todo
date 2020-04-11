import { Injectable } from '@angular/core';

// Injectable: this service is injectable on the constructor of other components
@Injectable({
  providedIn: 'root'
})

export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    //console.log('before ' + this.isUserLoggedIn());
    if (username === 'test' && password === 'password') {
      sessionStorage.setItem('authenticaterUser', username)
      //console.log('after ' + this.isUserLoggedIn())
      return true
    }
    return false
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser')
  }
}
