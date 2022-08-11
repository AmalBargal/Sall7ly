import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationLayerService } from '../communication-layer.service';
import { RequestsService } from '../services/RequestS.service';

@Component({
  selector: 'app-upcoming-request',
  templateUrl: './upcoming-request.component.html',
  styleUrls: ['./upcoming-request.component.scss']
})
export class UpcomingRequestComponent implements OnInit {
requests;
pipe = new DatePipe('en-US');
  constructor(private requestService : RequestsService , private CommunicationService : CommunicationLayerService,
    private router : Router) { }

  ngOnInit(): void {
    this.requestService.getPendingRequestsByHandymanSsn(Number(localStorage.getItem('userId'))).subscribe(res=>{
      if(res)
        this.requests=res;
      console.log(this.requests)
    })
  }

  cancelRequest(id:number) {
    this.requestService.cancelRequest(id).subscribe();
    location.reload();
  }

  acceptRequest(id:number) {
    this.requestService.acceptRequest(id).subscribe(res=>{
      if(res){
        this.CommunicationService.SetRequestID(res.request_ID);
        this.router.navigate([`/requestdetails`]);
      }
      else location.reload();
    });
  }

}
