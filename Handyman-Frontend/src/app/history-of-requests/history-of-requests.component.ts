import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationLayerService } from '../communication-layer.service';
import { RequestsService } from '../services/RequestS.service';

@Component({
  selector: 'app-history-of-requests',
  templateUrl: './history-of-requests.component.html',
  styleUrls: ['./history-of-requests.component.scss']
})
export class HistoryOfRequestsComponent implements OnInit {
  request;
  requests;
  userID;
  role;
  pipe = new DatePipe('en-US');

  constructor(
    private RequestsService: RequestsService,
    private CommunicationService: CommunicationLayerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserIdandRole();
    this.getRequestsByClientIDorHandySSNMethod(this.userID, this.role);
  }

  onSubmit(value: number) {
    this.CommunicationService.SetRequestID(value);
    this.router.navigate([`/requestdetails`]);
  }

  getUserIdandRole() {
    this.userID = localStorage.getItem('userId');
    this.role = localStorage.getItem('role');
  }
  getRequestsByClientIDorHandySSNMethod(data: Number, role) {
    this.RequestsService.getRequestsByClientIDorHandySSN(data, role).subscribe(
      res => {
        this.requests = res;
        console.log(res);
      },
      err => {}
    );
  }
}
