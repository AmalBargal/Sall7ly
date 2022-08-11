import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
// import { tokenNotExpired } from 'angular2-jwt';
import { RequestService } from './request.service';
// import {ApiService} from

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  private loginPath = '/login';
  //  private registerPath = environment.apiUrl+''   // ? Not Now

  // private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  // isloggedin$ = this._isLoggedIn$.asObservable();

   Controller = '/login';


  constructor(private requestService: RequestService, http: HttpClient, private router : Router) {}

  loginform: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),

    password: new FormControl(null, Validators.required),

    role: new FormControl(null, Validators.required)
  });

  
  login(data): Observable<any> {
    return this.requestService.post( this.loginPath,data);
  }

  // Todo : Make get client by Email Function

  saveToken(token) {
    
    console.log(token);
    localStorage.setItem('token', token);
    //document.location.reload();

  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');

    // document.location.reload();
    this.router.navigate(['/']).then(s=>document.location.reload());
  }
  

 
}
