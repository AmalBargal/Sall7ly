import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CraftService } from 'src/app/services/craft.service';
import { ClientRegister} from 'src/app/models/client-register';
import { RegisterService } from 'src/app/services/register.service';
import { ConfirmPasswordValidator } from '../confirm-password.validator';
//import { ConfirmPasswordValidator } from './confirm-password.validator';
import { RegionService } from 'src/app/services/Region.service';


@Component({
  selector: 'client-ll-signup',
  templateUrl: './client-sginup.component.html',
  styleUrls: ['./client-sginup.component.scss']
})
export class ClientSginupComponent implements OnInit {
  formGroup:FormGroup;
  Regions;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private registerService:RegisterService,private fb:FormBuilder,private router:Router, private RegionService : RegionService) { }

  ngOnInit(): void {
    this.initForm();
    this.GetRegions();
    debugger

  }
  GetRegions() {
    debugger
    this.RegionService.getRegion().subscribe(
      reg => {
        this.Regions = reg;
      },
      err => {}
    );}
  
  loadForm() {
    this.formGroup =this.registerService.clientRegisterForm;
  }
  initForm() {
  this.formGroup = this.fb.group(
    {
      Client_name: [null,
        Validators.compose([
          Validators.required
       
        ])
      ],
      Client_Address: [null,
        Validators.compose([
          Validators.required
       
        ])
      ],
      Region_ID : [null],
      Client_Email    : ['',
      Validators.compose([
        Validators.required,
        Validators.pattern(this.emailPattern)
      ])
    ],
    Client_Mobile : ['',
      Validators.compose([
        Validators.required,
        //Validators.pattern(this.phonePattern)
      ])
    ],
      Password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(100),
        ]),
      ],
      CPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(100),
        ]),
      ],
   //   agree: [false, Validators.compose([Validators.required])],
    },
    {
      validator: ConfirmPasswordValidator.MatchPassword,
    }
  );
}
submit(){
  debugger
  this.registerService.Createclientregister(this.formGroup.value).subscribe(
    res => {
    },
    
    err => {}
  );
 
}
  // helpers for View
  isControlValid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.formGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.formGroup.controls[controlName];
    return control.dirty || control.touched;
  }
  

}
