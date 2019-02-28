import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Tile {
  backgroundColor: string;
  color: string;
  text: string;
  icon: string;
  routerLink?: string;
  click: () => void;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  user: string;
  tiles: Tile[] = [
    { text: 'ALPHA', color: 'white', backgroundColor: '#49a54b', icon: 'show_chart', click: () => this.onClick() },
    { text: 'BETA', color: 'white', backgroundColor: '#9229ad', icon: 'settings', routerLink: '/', click: () => { } },
    { text: 'GAMMA', color: 'white', backgroundColor: '#6c757d', icon: 'show_chart', routerLink: '/', click: () => { } },
    { text: 'TEST 2', color: 'white', backgroundColor: '#6c757d', icon: 'show_chart', routerLink: '/', click: () => { } },

  ];
  constructor(public http: HttpClient) {

  }

  ngOnInit() {
  }

  onClick() {

  }

}
