import { Component, OnInit } from '@angular/core';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { BaseLayoutComponent } from 'src/app/shared/components/layouts/base-layout/base-layout.component';
import { SidenavComponent } from 'src/app/shared/components/sidenav/sidenav.component';


@Component({
  selector: 'app-client-edit-profile',
  templateUrl: './client-edit-profile.component.html',
  styleUrls: ['./client-edit-profile.component.scss']
})
export class ClientEditProfileComponent implements OnInit {

  constructor(Headercomponent : HeaderComponent,
              BaseLayoutComponent : BaseLayoutComponent, 
              Footercomponent : FooterComponent, 
              SidenavComponent : SidenavComponent) { }

  ngOnInit(): void {
  }

}
