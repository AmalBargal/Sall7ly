import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { CommunicationLayerService } from 'src/app/communication-layer.service';
import { ClientService } from 'src/app/services/Client.service';
import { HandymanService } from 'src/app/services/Handyman.service';
import { RegionService } from 'src/app/services/Region.service';

@Component({
  selector: 'app-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  providers: [FormBuilder]
})
export class EditProfileComponent implements OnInit {
  formGroup: FormGroup;
  client;
  Regions;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

  checkStatus: boolean = true;
  role: boolean = localStorage.getItem('role') === 'Handyman' ? false : true;
  constructor(
    private ClientService: ClientService,
    private HandymanService: HandymanService,
    private RegionService: RegionService,
    private communicationService: CommunicationLayerService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.GetRegions();
    this.communicationService.getClient().subscribe(newValue => {
      if (newValue) {
        this.client = newValue;
      }
    });
    if (!this.role) {
      this.initHandymanForm();
    } else {
      this.initForm();
    }
  }

  public localStorageItem(): boolean {
    if (localStorage.getItem('role') === 'Client') {
      return true;
    } else {
      return false;
    }
  }

  initForm() {
    this.formGroup = this.fb.group({
      client_ID: [this.client.client_ID],
      client_name: new FormControl(this.client.client_name),
      client_Address: new FormControl(this.client.client_Address),
      region_ID: new FormControl(this.client.region_ID),
      client_Email: new FormControl(this.client.client_Email),
      client_Mobile: new FormControl(this.client.client_Mobile),
      password: new FormControl(this.client.password)
    });
  }

  initHandymanForm() {
    this.formGroup = this.fb.group({
      handyman_SSN: [this.client.handyman_SSN],
      handyman_Name: new FormControl(this.client.handyman_Name),
      craftID: [this.client.craftID],
      handyman_Fixed_Rate: new FormControl(this.client.handyman_Fixed_Rate),
      handyman_Mobile: new FormControl(this.client.handyman_Mobile),
      password: new FormControl(this.client.password)
    });
  }

  async GetRegions() {
    await this.RegionService.getRegion().subscribe(
      reg => {
        this.Regions = reg;
      },
      err => {}
    );
  }

  submit() {
    console.log(this.formGroup.value);
    if (!this.role) {
      this.HandymanService.editHandymen(Number(localStorage.getItem('userId')), this.formGroup.value).subscribe(
        res => {
          console.log(res);
        },

        err => {}
      );
    } else {
      this.ClientService.editClient(Number(localStorage.getItem('userId')), this.formGroup.value).subscribe(
        res => {
          console.log(res);
        },

        err => {}
      );
    }
    this.router.navigate(['profile']);
  }
}
