import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DhCharactersDetailsRoutingModule } from './dh-characters-details-routing.module';
import { DhCharactersDetailsComponent } from './dh-characters-details.component';


@NgModule({
  declarations: [
    DhCharactersDetailsComponent
  ],
  imports: [
    CommonModule,
    DhCharactersDetailsRoutingModule
  ]
})
export class DhCharactersDetailsModule { }
