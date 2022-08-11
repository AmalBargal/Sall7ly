import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/Client.service';
import { RequestsService } from 'src/app/services/RequestS.service';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';


@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {

  client;
  constructor(private ClientService:ClientService, private requestservice:RequestsService, header:HeaderComponent) { }

  ngOnInit(): void {
  }
  getClientByID(id){
    this.ClientService.getClientbyId(id).subscribe(res=>{
      
        this.client=res;
    },err=>{

    })

}}
