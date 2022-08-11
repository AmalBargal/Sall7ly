import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { LoginService } from 'src/app/services/login.service';
import { Menu, menuList as staticMenuList } from '../../data/menus';

@Component({
  selector: 'll-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() topFixed: boolean;
  @Output() toggleSidenav = new EventEmitter();
  isScrolled: boolean;
  menuList : Menu[]=  [];
  isLessThenLargeDevice;
  isLoggedIn:boolean = localStorage.getItem("token")? true : false; 
  role : boolean = localStorage.getItem("role")=="Handyman"? true : false;
  constructor(private breakpointObserver: BreakpointObserver, private loginService : LoginService) {}

  ngOnInit(): void {
    
    if(this.isLoggedIn){
      this.menuList = staticMenuList;
      if(!this.role){
        this.menuList=this.menuList.slice(0,this.menuList.length-1);
    }
    }

    
    this.breakpointObserver.observe(['(max-width: 1199px)']).subscribe(({ matches }) => {
      this.isLessThenLargeDevice = matches;
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isScrolled = window.pageYOffset > 15;
  }


}
