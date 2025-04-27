import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DhCharactersCardComponent } from './dh-characters-card.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    DhCharactersCardComponent
  ],
  exports: [
    DhCharactersCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DhCharactersCardModule { }
