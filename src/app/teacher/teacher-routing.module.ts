import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowlistComponent } from './showlist/showlist.component';
import { CreatelistComponent } from './createlist/createlist.component';

const routes: Routes = [

  {path:'teacher-showlead',component:ShowlistComponent},
  {path:'teacher-createlead',component:CreatelistComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
