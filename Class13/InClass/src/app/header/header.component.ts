import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menu = ['item 1' ,  'item 2' , 'item 3' , 'item 4']

  constructor() { }

  ngOnInit() {
  }

}
