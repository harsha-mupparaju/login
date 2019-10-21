import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {User} from './user';
import { AuthenticationService } from '../authentication.service';
import {FormGroup,FormBuilder,Validators, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService,
    private router:Router) { }

  ngOnInit() {
  }
  loginUser(user){

    this.authenticationService.loginUser(user).subscribe(data=>{
      console.log(data);
      this.router.navigateByUrl('/user-dashboard');
    },error=>{
      this.router.navigateByUrl('/register');

    });
  }
}
