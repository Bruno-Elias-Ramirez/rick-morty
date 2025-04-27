import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DhAboutRoutingModule } from './dh-about-routing.module';
import { DhAboutComponent } from './dh-about.component';


@NgModule({
  declarations: [
    DhAboutComponent
  ],
  imports: [
    CommonModule,
    DhAboutRoutingModule
  ]
})
export class DhAboutModule { }
