import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserType } from './../../interfaces/user-type';
import { AuthServiceService } from './../../services/auth-service.service';
import { AuthApiServiceService } from './../../services/auth-api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm = new FormGroup ({
    name: new FormControl('', [
      Validators.required
    ]), 
    password: new FormControl('', [
      Validators.required
    ])
  });
  constructor(private _snackBar: MatSnackBar, private router: Router, private _userService: AuthServiceService, private _loggedService: AuthApiServiceService) { }

  ngOnInit(): void { 
  }
  showFeedback (message, action) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  goToItems() {
    this.router.navigate(['home']);
  }
  validate() {
    if(this.loginForm.value.name && this.loginForm.value.password) {      
        this.showFeedback(this.loginForm.value.name, ' is logged');
        const log: UserType  = this.loginForm.value;
        if(this._userService.isValidUser) {
          this._loggedService.setUserInfo(log);
          this.goToItems();
        }
    }
  }

}
