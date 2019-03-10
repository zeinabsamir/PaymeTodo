import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private BACKEND_URL = environment.apiUrl + 'users/login';
// private _loginUrl = 'http://localhost:3000/users/login';

  constructor(private http: HttpClient, private _route: Router) { }

  loginUser(user) {
   return this.http.post<any>(this.BACKEND_URL, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }
  logoutUser() {
    localStorage.removeItem('token');
    this._route.navigate(['/login']);
  }
}
