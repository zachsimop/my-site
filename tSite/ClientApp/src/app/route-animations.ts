import { trigger, transition, style, query, group, animate, animateChild, keyframes } from '@angular/animations';

export const fader =
trigger('routeAnimations', [
  transition('closed <=> open', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100)'
      }),
    ]),
    query(':enter', [
      animate('3s ease',
        style({ opacity: 1, transform: 'scale(1) translateY(0)' })
      ),
    ]),
    query(':leave', [
      animate('3s ease',
        style({ opacity: 0, transform: 'scale(1) translateY(0)' })
      ),
    ]),
  ]),
]);