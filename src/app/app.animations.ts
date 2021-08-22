import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('300ms', style({ opacity: 0 })),
  ]),
]);

/**
 * query Dom elements when using sturctural directives like ngFor and ngIf
 */
export const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ transform: 'scale(0)' }),
        stagger(
          '60ms',
          animate(
            '600ms ease-out',
            style({ transform: 'scale(1)', color: 'red' })
          )
        ),
      ],
      { optional: true }
    ),
    query(':leave', animate('300ms', style({ opacity: 0, color: 'orange' })), {
      optional: true,
    }),
  ]),
]);

export const popFade = trigger('popFade', [
  transition(':enter', [
    style({ transform: 'scale(0)', backgroundColor: 'pink' }),
    animate('1s', style({ transform: 'scale(1)', backgroundColor: 'orange' })),
  ]),
  transition(':leave', [
    style({ transform: 'scale(1)' }),
    animate('1s', style({ transform: 'scale(0)' })),
  ]),
]);
