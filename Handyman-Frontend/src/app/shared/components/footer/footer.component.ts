import { Component, NgModule, OnInit } from '@angular/core';
import { CraftService } from 'src/app/services/craft.service';

@Component({
  selector: 'll-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})


export class FooterComponent implements OnInit {
  crafts;
  constructor(private craftservice : CraftService) { }

  ngOnInit(): void {
    this.GetCrafts()
  }
  GetCrafts() {
    this.craftservice.getCrafts().subscribe(
      res => {
        this.crafts = res;
      },
      err => {}
    );
  }

}
