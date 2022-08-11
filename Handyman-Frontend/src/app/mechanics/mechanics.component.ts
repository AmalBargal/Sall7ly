import { Component, OnInit } from '@angular/core';
import { mechanicsDB } from '../shared/data/mechanics';

@Component({
  selector: 'app-mechanics',
  templateUrl: './mechanics.component.html',
  styleUrls: ['./mechanics.component.scss']
})
export class MechanicsComponent implements OnInit {
  mechanics = []
  constructor() {
    this.mechanics = mechanicsDB.Mechanic;
   }

  ngOnInit(): void {
  }

}
