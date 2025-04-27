import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DhNotFoundRoutingModule } from './dh-not-found-routing.module';
import { DhNotFoundComponent } from './dh-not-found.component';


@NgModule({
  declarations: [
    DhNotFoundComponent
  ],
  imports: [
    CommonModule,
    DhNotFoundRoutingModule
  ]
})
export class DhNotFoundModule { }
