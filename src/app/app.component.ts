import { Component } from '@angular/core';
import { SidenavService } from './sidenav/Sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sideNav Compact Demo';

  routes = [{
    icon: 'home',
    route: 'home',
    title: 'Home',
  }, {
    icon: 'settings',
    route: '/settings',
    title: 'Settings',
  }, {
    icon: 'view_quilt',
    route: '/kpi',
    title: 'KPI',
  },
  {
    icon: 'extension',
    route: 'design-patterns',
    title: 'Design Patterns',
  },
  {
    icon: 'view_carousel',
    route: 'templates',
    title: 'Templates',
  },
  ];

  constructor(private sideNavService: SidenavService) {
}
toggle() {
  this.sideNavService.toggle();
}
}
