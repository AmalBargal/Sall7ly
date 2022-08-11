import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from 'src/app/auth/signup/confirm-password.validator';
import { PaymentService } from './Payment.service';
import { RequestService } from './request.service';

@Injectable({
  providedIn: 'root'
})
export class MakingRequestService {
  Controller = '/Request';
  payments;

  constructor(private requestService: RequestService, private paymentService: PaymentService) {}
  RequestForm: FormGroup = new FormGroup({
    request_Date: new FormControl(null, Validators.required),
    payment: new FormControl(null, Validators.required), // ! Send it as object
    handyman_SSN: new FormControl(null, Validators.required),
    client_ID: new FormControl(null, Validators.required)
  });

  // TODO : Creating an object and send it to The API (Search Required)
  // ? Send object inside object ??????

  // getCrafts() {
  //   return this.requestService.get(this.Controller) as Observable<any>;
  // }
}
