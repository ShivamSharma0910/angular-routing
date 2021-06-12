import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeHi from '@angular/common/locales/hi';
registerLocaleData(localeHi);
@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css']
})
export class ShowlistComponent implements OnInit {


  currentDate: number = Date.now();
  name="Shivam Sharma";
 address="23 pansariyan bohran gali";
 date = new Date();
 today:any;
  constructor() { }

  ngOnInit() {
  }

}
