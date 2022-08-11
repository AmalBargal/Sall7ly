import { DatePipe, getLocaleDateFormat } from '@angular/common';
import { Component, getModuleFactory, Injectable, OnInit } from '@angular/core';
//import { request } from 'http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommunicationLayerService } from 'src/app/communication-layer.service';
import { RequestService } from 'src/app/services/request.service';
import { RequestsService } from 'src/app/services/RequestS.service';
import { CollisionsOverlap } from 'tsparticles/dist/Options/Classes/Particles/Collisions/CollisionsOverlap';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss'],
  providers: [FormBuilder]
})



export class RequestDetailsComponent implements OnInit {
  request;
  formgroup: FormGroup;
  editrequest;
  pipe = new DatePipe('en-US');
  role = localStorage.getItem('role') === 'Handyman' ? true : false;
  status;
  editReview = false;
  dateNow = new Date();
  dateReq : boolean;
  requestDate;

  constructor(
    private requestService: RequestService,
    private requestsservice: RequestsService,
    private communicationService: CommunicationLayerService,
    private fb : FormBuilder,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.communicationService.getRequestID().subscribe(newValue => {
      if (newValue) {
        this.GetRequest(newValue);
      }
    });
  }

  GetRequest(ID) {
    this.requestsservice.getRequestById(ID).subscribe(
      res => {
        this.request = res;
        this.requestDate = new Date(this.request.request.request_Date);
        this.status=this.request.request.request_Status;
        this.dateReq=this.requestDate>=this.dateNow ? true : false;
      },
      err => {}
    );
  }
  putRequest(id, requestObj) {
    this.requestsservice.editReview(id, requestObj).subscribe(
      res => {
        this.editrequest = res;
      },
      err => {}
    );
  }
  initForm() {
    this.formgroup = this.fb.group(
      {
        
        rate: new FormControl(this.request.request.handy_Rate),
        
        review: new FormControl(this.request.request.handy_Review),
      }
    )
  };
  getstatus(status: number) {
    if (status == 0) return 'Pending for Tommorow';
    else if (status == 1) return 'Pending for Today';
    if (status == 2) return 'Accepted';
    else if (status == 3) return 'Canceled by Client';
    if (status == 4) return 'Canceled by Handyman';
  }
  submit() {
    debugger;
    if (this.editReview === true) {
      this.editReview = false;
      this.putRequest(this.request.request.request_ID,this.formgroup.value);

      this.router.navigate(['/auth/requestHistory']);
    } else {
      this.editReview = true;
      this.initForm();
    }
  }
   cancelRequest() {
    this.requestsservice.cancelRequest(this.request.request.request_ID).subscribe();
  }
}
