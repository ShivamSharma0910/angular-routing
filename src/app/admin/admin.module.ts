import { NgModule,LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreatelistComponent } from './createlist/createlist.component';
import { ShowlistComponent } from './showlist/showlist.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [CreatelistComponent, ShowlistComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserModule
  ],
  providers: [ 
    { provide: LOCALE_ID, useValue: 'hi' } 
  ],

  exports:[
     CreatelistComponent,
     ShowlistComponent
  ]
})
export class AdminModule { }
