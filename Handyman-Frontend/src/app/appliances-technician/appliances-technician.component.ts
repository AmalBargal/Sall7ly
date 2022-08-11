import { Component, OnInit } from '@angular/core';
import { appliancesTechniciansDB } from '../shared/data/appliances-technicians';

@Component({
  selector: 'app-appliances-technician',
  templateUrl: './appliances-technician.component.html',
  styleUrls: ['./appliances-technician.component.scss']
})
export class AppliancesTechnicianComponent implements OnInit {
  appliancesTechnicians = []

  constructor() { 
    this.appliancesTechnicians = appliancesTechniciansDB.AppliancesTechnician;
  }

  ngOnInit(): void {
  }

}
