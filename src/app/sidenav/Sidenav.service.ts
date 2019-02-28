import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { MatSidenav } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sidenav: MatSidenav;
  compacted: boolean;
  public sidenavCompactStateIcon: Subject<string> = new BehaviorSubject<string>(null);

  @Output() compactedChange: EventEmitter<boolean> = new EventEmitter();

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  toggleCompact() {
    this.compacted = !this.compacted;
    !this.compacted ? this.sidenavCompactStateIcon.next('pin') : this.sidenavCompactStateIcon.next('pin-off');
    this.compactedChange.emit(this.compacted);
  }

  toggle() {
    this.sidenav.toggle(!this.sidenav.opened);
  }

  constructor() {
    this.sidenavCompactStateIcon.next('pin-off');
  }

}
