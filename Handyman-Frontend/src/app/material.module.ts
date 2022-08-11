// material.module.ts

import { NgModule } from '@angular/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [MatDatepickerModule, BrowserAnimationsModule, MatIconModule],
  exports: [MatDatepickerModule, BrowserAnimationsModule, MatIconModule],
  providers: [MatDatepickerModule]
})
export class MaterialModule {}
