import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreatelistComponent } from './createlist/createlist.component';
import { ShowlistComponent } from './showlist/showlist.component';


@NgModule({
  declarations: [CreatelistComponent, ShowlistComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:[
     CreatelistComponent,
     ShowlistComponent
  ]
})
export class AdminModule { }
