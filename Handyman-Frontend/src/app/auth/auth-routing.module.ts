import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryOfRequestsComponent } from '../history-of-requests/history-of-requests.component';
import { LoginComponent } from './login/login.component';
import { RequestComponent } from './request/request.component';
import { ClientSginupComponent } from './signup/client-sginup/client-sginup.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'clientsignup',
    component: ClientSginupComponent
  },
  {
    path: 'request',
    component: RequestComponent
  },
  {
    path: 'requestHistory',
    component: HistoryOfRequestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
