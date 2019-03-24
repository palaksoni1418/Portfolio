import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navList:Array<string>;
  private selected: string;
  constructor() {
    this.navList = [
      'portfolio',
      'about',
      'skills',
      'experience',
      'contact'
    ];
  }
  select(item: string) {
    this.selected = item;
  };
  isActive(item: string) {
    return this.selected === item;
  };

  ngOnInit() {
  }

}
