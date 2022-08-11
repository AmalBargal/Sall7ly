import { Component, OnInit } from '@angular/core';
import { electriciansDB } from '../shared/data/electricians';

@Component({
  selector: 'app-electricians',
  templateUrl: './electricians.component.html',
  styleUrls: ['./electricians.component.scss']
})
export class ElectriciansComponent implements OnInit {
  electricians = []
  constructor() { 
    this.electricians = electriciansDB.Electrician;
  }

  ngOnInit(): void {
  }

}
