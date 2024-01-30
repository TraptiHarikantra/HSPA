import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/Services/alertify.service';
import { AuthService } from 'src/Services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService:AuthService, 
    private alertify: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  OnSubmit(loginForm: NgForm){
    console.log(loginForm.value);
    let token = this.authService.authUser(loginForm.value);
    if(token)
    {
      localStorage.setItem('token', token.userName);
      this.alertify.success("Login successful");
      this.router.navigate(['/']);
    }
    else
    {
      this.alertify.error("login failed");
    }
  }

}
