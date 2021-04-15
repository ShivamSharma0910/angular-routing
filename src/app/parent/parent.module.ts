import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentRoutingModule } from './parent-routing.module';
import { ShowlistComponent } from './showlist/showlist.component';
import { CreatelistComponent } from './createlist/createlist.component';


@NgModule({
  declarations: [ShowlistComponent, CreatelistComponent],
  imports: [
    CommonModule,
    ParentRoutingModule
  ]
})
export class ParentModule { }
