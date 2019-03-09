import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService: AuthService,
              private _route: Router ) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    // if (form.invalid) {
    //   return;
    // }
    this.authService.loginUser(form.value)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._route.navigate(['/todos'])
        },
      err => console.log(err)
    );
  }
}
