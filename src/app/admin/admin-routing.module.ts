import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatelistComponent } from './createlist/createlist.component';
import { ShowlistComponent } from './showlist/showlist.component';

const routes: Routes = [
  {path:'admin-createlead',component:CreatelistComponent},
  {path:'admin-showlead',component:ShowlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
