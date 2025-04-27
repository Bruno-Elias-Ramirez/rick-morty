import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DhNotFoundComponent } from './dh-not-found.component';

const routes: Routes = [{ path: '', component: DhNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DhNotFoundRoutingModule { }
