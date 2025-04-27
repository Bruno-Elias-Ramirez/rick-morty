import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DhAboutComponent } from './dh-about.component';

const routes: Routes = [{ path: '', component: DhAboutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DhAboutRoutingModule { }
