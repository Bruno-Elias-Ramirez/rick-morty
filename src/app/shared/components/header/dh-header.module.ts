import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DhHeaderComponent } from './dh-header.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    DhHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DhHeaderComponent
  ]
})
export class DhHeaderModule { }
