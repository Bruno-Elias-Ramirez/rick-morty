import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DhHomeComponent } from './dh-home.component';

const routes: Routes = [{ path: '', component: DhHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DhHomeRoutingModule { }
