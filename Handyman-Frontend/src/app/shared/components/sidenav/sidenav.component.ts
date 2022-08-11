import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { menuList } from '../../data/menus';

@Component({
  selector: 'll-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  navList = [];
  isLoggedIn:boolean = localStorage.getItem("token")? true : false;
  constructor( private loginService : LoginService) { }

  ngOnInit(): void {
    this.navList = menuList;
    if(!this.isLoggedIn){
      this.navList=this.navList.slice(2,this.navList.length);}
  }

}
