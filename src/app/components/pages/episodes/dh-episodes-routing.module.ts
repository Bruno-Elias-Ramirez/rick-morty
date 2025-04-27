import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DhEpisodesComponent } from './dh-episodes.component';

const routes: Routes = [{ path: '', component: DhEpisodesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DhEpisodesRoutingModule { }
