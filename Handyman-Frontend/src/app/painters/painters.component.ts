import { Component, OnInit } from '@angular/core';
import { paintersDB } from '../shared/data/painters';

@Component({
  selector: 'app-painters',
  templateUrl: './painters.component.html',
  styleUrls: ['./painters.component.scss']
})
export class PaintersComponent implements OnInit {
  painters = []
  constructor() {
    this.painters = paintersDB.Painter;
   }

  ngOnInit(): void {
  }

}
