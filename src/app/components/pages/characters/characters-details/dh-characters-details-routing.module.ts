import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DhCharactersDetailsComponent } from './dh-characters-details.component';

const routes: Routes = [{ path: '', component: DhCharactersDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DhCharactersDetailsRoutingModule { }
