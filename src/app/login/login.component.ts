import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'test'
  password = 'password'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  // Router
  // User Dependency Injection
  // router is automatically declared a member variable
  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username)
    if (this.username === 'test' && this.password === 'password') {
      // Redirect to welcome page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
