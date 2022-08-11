import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationLayerService } from './communication-layer.service';
import { CommunicationService } from './services/Communication.service';

@Component({
  selector: 'll-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // providers: [CommunicationLayerService]
})
export class AppComponent {
  public Subscription: Subscription;
  public communication: string;
  // sharedSSN: Number;
  constructor(private CommunicationService: CommunicationLayerService) {}
  // ngOnInit(): void {
  //   this.CommunicationService.SSNStatus.subscribe((a: Number) => {
  //     this.sharedSSN = a;
  //   });
  // }
}
