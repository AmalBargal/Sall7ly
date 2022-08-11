import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'll-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  flag = 0;
  particlesOptions = {
    particles: {
      color: {
        value: ['#ffffff', '#ffffff']
      },
      size: {
        value: 1
      },
      lineLinked: {
        enable: true,
        color: 'random'
      },
      move: {
        enable: true,
        speed: 1.5
      }
    }
  };
  constructor(private router: Router) {
    // this.checkLogged();
  }

  checkLogged() {
    if (!localStorage.getItem('Signed')) {
      localStorage.setItem('Signed', 'no reload');
      location.reload();
    } else {
      localStorage.removeItem('Signed');
    }

    // ? Using localstorage as a flag
  }

  ngOnInit(): void {
    this.checkLogged();
    window.scrollTo(0, 0);

  }
}
