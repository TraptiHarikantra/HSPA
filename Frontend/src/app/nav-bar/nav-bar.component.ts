import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/Services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  loginUser: any;
  constructor(private alertify: AlertifyService) { }

  ngOnInit() {
  }

  loggedIn() {
    this.loginUser = localStorage.getItem('token');
    return localStorage.getItem('token');
  }

  onLogout(){
    this.alertify.success("you are logged out");
    return localStorage.removeItem('token');
  }

}
