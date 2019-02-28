import {
    animate,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';

/*
 * animation: sideNaveAnimation
 * trigger: 'openClose'
 *
 * comments: sets the width of an element to 200px when 'open' and to 60px
 *   when closed.  Animates in between these two states over '0.3s'
 */

export const sideNavAnimation = trigger('openCloseSidenav', [
    state('0', style({
        width: '280px',
    })),
    state('1', style({
        width: '60px',
    })),
    transition('1 <=> 0', [
        animate('250ms ease-in')
    ]),
]);
