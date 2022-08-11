import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { login } from 'src/app/models/login';
import { Subscription, Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'll-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user;
  isLoggedIn: boolean = localStorage.getItem('token') ? true : false;

  constructor(private fb: FormBuilder, private LoginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
    //this.userlogin()
  }
  initForm() {
    this.loginForm = this.fb.group({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      role: new FormControl(null, Validators.required)
    });
  }
  submit() {
    debugger;
    this.LoginService.login(this.loginForm.value).subscribe(data => {
      localStorage.setItem('token', data['token']);
      localStorage.setItem('userId', data['userId']);
      localStorage.setItem('role', this.loginForm.value.role);
      this.isLoggedIn=true;
    });
     this.redirect()

    //this.router.navigate([''], {});
  }

  login(){
    
  }
  redirect() {
    if (this.isLoggedIn === true) {
      if(localStorage.getItem('role') == 'Handyman')
      {
        this.router.navigate(['/profile'])
      }
      else
      this.router.navigate(['/'])
      
      // .then(() => {
      //   window.location.reload();
      // });
    }
  }
}
