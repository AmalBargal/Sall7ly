import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientEditProfileComponent } from './client-profile/client-edit-profile/client-edit-profile.component';
import { HistoryOfRequestsComponent } from './history-of-requests/history-of-requests.component';
import { RequestDetailsComponent } from './Request/request-details/request-details.component';
import { BaseLayoutComponent } from './shared/components/layouts/base-layout/base-layout.component';

const baseLayoutRouting: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: baseLayoutRouting
  },
  {
    // Random Comment
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'doc',
    loadChildren: () => import('./doc/doc.module').then(m => m.DocModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'client-edit-profile',
    component: ClientEditProfileComponent
  },
  {
    path: 'requestdetails',
    component: RequestDetailsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
