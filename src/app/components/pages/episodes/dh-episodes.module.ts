import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DhEpisodesRoutingModule } from './dh-episodes-routing.module';
import { DhEpisodesComponent } from './dh-episodes.component';


@NgModule({
  declarations: [
    DhEpisodesComponent
  ],
  imports: [
    CommonModule,
    DhEpisodesRoutingModule
  ]
})
export class DhEpisodesModule { }
