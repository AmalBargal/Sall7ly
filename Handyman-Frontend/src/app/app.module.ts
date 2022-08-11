import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';
import { PlumberComponentComponent } from 'src/app/plumber-component/plumber-component.component';
import { ClientEditProfileComponent } from './client-profile/client-edit-profile/client-edit-profile.component';
import { HistoryOfRequestsComponent } from './history-of-requests/history-of-requests.component';
import { HandymenComponent } from './handymen/handymen.component';
import { CarpentersComponent } from './carpenters/carpenters.component';
import { ElectriciansComponent } from './electricians/electricians.component';
import { PaintersComponent } from './painters/painters.component';
import { MechanicsComponent } from './mechanics/mechanics.component';
import { AppliancesTechnicianComponent } from './appliances-technician/appliances-technician.component';
import { OtherComponent } from './other/other.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenServiceService } from './services/token-service.service';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { RequestDetailsComponent } from './Request/request-details/request-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpcomingRequestComponent } from './upcoming-request/upcoming-request.component';
import { CommonModule } from '@angular/common';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PlumberComponentComponent,
    HistoryOfRequestsComponent,
    HandymenComponent,
    CarpentersComponent,
    ElectriciansComponent,
    PaintersComponent,
    ProfileComponent,
    EditProfileComponent,
    MechanicsComponent,
    AppliancesTechnicianComponent,
    OtherComponent,
    RequestDetailsComponent,
    UpcomingRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'handymen/1',
        component: PlumberComponentComponent
      },
      {
        path: 'handymen',
        component: HandymenComponent
      },
      {
        path: 'handymen/2',
        component: CarpentersComponent
      },
      {
        path: 'handymen/3',
        component: MechanicsComponent
      },
      {
        path: 'handymen/4',
        component: PaintersComponent
      },
      {
        path: 'handymen/5',
        component: ElectriciansComponent
      },
      {
        path: 'handymen/6',
        component: AppliancesTechnicianComponent
      },
      {
        path: 'client-profile',
        component: ClientProfileComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'edit',
        component: EditProfileComponent
      },
      {
        path: 'upcoming-request',
        component: UpcomingRequestComponent
      }
    ])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenServiceService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
