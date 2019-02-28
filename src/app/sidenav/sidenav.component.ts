import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { sideNavAnimation } from './sidenav.animations';
import { SidenavService } from './Sidenav.service';
import { AnimationEvent } from '@angular/animations';

import { MatSidenav, MatDrawerToggleResult } from '@angular/material';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [sideNavAnimation]
})
export class SidenavComponent implements OnInit {
  compacted: boolean;
  isVisibleWhenCompact: boolean;
  watcher: Subscription;
  activeMediaQuery = '';
  isMobile: boolean;

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  @Input() routes: any;

  @Input() opened: boolean;

  constructor(private sideNavService: SidenavService, mediaObserver: MediaObserver) {
    this.watcher = mediaObserver.media$.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      this.isMobile = (change.mqAlias === 'xs') || (change.mqAlias === 'sm');
      this.opened = !this.isMobile;
      this.compacted = !this.isMobile;
    });
  }

  ngOnInit() {
    this.sideNavService.setSidenav(this.sidenav);
    this.sideNavService.compacted = this.compacted;
    this.sideNavService.compactedChange.subscribe((compacted: boolean) => {
      this.compacted = compacted;
    });
  }

  public toggleCompact() {
    this.sideNavService.toggleCompact();
  }

  public toggle(): Promise<MatDrawerToggleResult> {
    return this.sidenav.toggle(!this.sidenav.opened);
  }

  onAnimationEvent(event: AnimationEvent) {
    if (event.phaseName === 'done') {
      if (event.fromState.toString() === 'true' && event.toState.toString() === 'false') {
        setTimeout(() => this.isVisibleWhenCompact = true);
      }
      if (event.fromState.toString() === 'false' && event.toState.toString() === 'true') {
        setTimeout(() => this.isVisibleWhenCompact = false);
      }
    }

    if (event.phaseName === 'start' && !this.isMobile) {
      setTimeout(() => this.isVisibleWhenCompact = false);
    }
  }

}
