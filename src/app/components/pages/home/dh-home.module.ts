import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DhHomeRoutingModule } from './dh-home-routing.module';
import { DhHomeComponent } from './dh-home.component';


@NgModule({
  declarations: [
    DhHomeComponent
  ],
  imports: [
    CommonModule,
    DhHomeRoutingModule
  ]
})
export class DhHomeModule { }
