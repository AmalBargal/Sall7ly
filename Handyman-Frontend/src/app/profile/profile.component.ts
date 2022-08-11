import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/Client.service';
import { CommunicationLayerService } from '../communication-layer.service';
import { HandymanService } from '../services/Handyman.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  client;
  handyman;
  checkStatus: boolean = true;
  role: boolean = localStorage.getItem('role') === 'Handyman' ? false : true;
  constructor(
    private ClientService: ClientService,
    private HandymanService: HandymanService,
    private router: Router,
    public CommunicationService: CommunicationLayerService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('role') == 'Client') this.getClientByID(localStorage.getItem('userId'));
    else this.getHandymanBySSN(localStorage.getItem('userId'));
    this.checkStatus = this.localStorageItem();
  }

  getClientByID(id) {
    this.ClientService.getClientbyId(id).subscribe(
      res => {
        this.client = res;
      },
      err => {}
    );
  }

  getHandymanBySSN(ssn) {
    this.HandymanService.getHandymanProfileBySSN(ssn).subscribe(res => {
      this.handyman = res;
    });
  }

  public localStorageItem(): boolean {
    if (localStorage.getItem('role') === 'Client') {
      return true;
    } else {
      return false;
    }
  }

  Onsubmit() {
    if (!this.role) {
      this.CommunicationService.setClient(this.handyman);
    } else {
      this.CommunicationService.setClient(this.client);
    }
    this.router.navigate(['edit']);
  }
}
