import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CarpentersComponent } from 'src/app/carpenters/carpenters.component';
import { CommunicationLayerService } from 'src/app/communication-layer.service';
import { GeneralHandyman } from 'src/app/models/General_Handyman';
import { CommunicationService } from 'src/app/services/Communication.service';
import { HandymanService } from 'src/app/services/Handyman.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'll-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
  //providers: [CommunicationService]
})
export class ProductDetailsComponent implements OnInit {
  [x: string]: any;
  //Handyman;
  //@Input() public SSN;
  // @Input() handymanCrafts;
  SSN;
  Handyman;
  dataIsReady = true;
  errorMessage: string = '500 SERVER ERROR, CONTACT ADMINISTRATOR!!!!';

  public subscription: Subscription;

  constructor(
    private HandymanService: HandymanService,
    public communicationService: CommunicationLayerService,
    private router: Router
  ) { }

  // variable of carpenter to call it in profile (Product Details)

  ngOnInit() {
    this.communicationService.getSSN().subscribe(newValue => {
      // console.log('this is after send data', newValue);
      if (newValue) {
        this.SSN = newValue;
        this.getHandymanProfileBySSNMethod(newValue);
      }
    });
    // debugger;
    // //this.subscription = this.HandymanService.getSSN().subscribe(msg => (this.SSN = msg));
    // this.communicationService.SSNStatus.subscribe((status: number) => (this.SSN = status));
    // //this.communicationService.SSNStatus.unsubscribe();
    // //this.SSN = this.communicationService.getValue();
    //console.log(this.SSN);
  }

  test() {
    //this.SSN = this.HandymanService.getSSN();
    // this.subscription = this.HandymanService.getSSN().subscribe(msg => (this.SSN = msg));
    // alert(this.subscription);
    // console.log(this.subscription);
  }

  getHandymanProfileBySSNMethod(id: number) {
    console.log(id);

    // debugger;
    this.HandymanService.getHandymanProfileBySSN(id).subscribe(
      res => {
        this.Handyman = res;
        console.log('This is a Test', res);
      },
      err => { }
    );
  }

  onSubmit() {
    if (!localStorage.getItem('token')) {
      this.router.navigate([`/auth/login`]);
    }
    else {
      debugger
      if (localStorage.getItem('role') === "Handyman")
        this.router.navigate([`/profile`]);
      else {
        //console.log('This is  a test from inside the profile :' + this.ssnData);
        this.communicationService.getSSN().subscribe(newValue => {
          // console.log('this is after send data', newValue);
          this.router.navigate([`/auth/request`]);
        });
      }
    }
  }

  // SSN
}
