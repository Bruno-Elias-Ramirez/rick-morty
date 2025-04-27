import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DhCharactersListRoutingModule } from './dh-characters-list-routing.module';
import { DhCharactersListComponent } from './dh-characters-list.component';
import {DhCharactersCardModule} from "@characters/characters-card/dh-characters-card.module";


@NgModule({
  declarations: [
    DhCharactersListComponent
  ],
  imports: [
    CommonModule,
    DhCharactersListRoutingModule,
    DhCharactersCardModule
  ]
})
export class DhCharactersListModule { }
