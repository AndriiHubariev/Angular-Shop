import {
  trigger,
  transition,
  group,
  style,
  animate,
  useAnimation,
} from '@angular/animations';
import {
  bounce,
  fadeOutLeft,
  fadeInLeft,
  fadeOutUp,
  fadeOut,
  fadeInUp,
  fadeInDown,
  fadeInRight,
  fadeOutDown,
  flash,
  pulse,
  rubberBand,
  tada,
  wobble,
  bounceIn,
} from 'ng-animate';

export const menuAnimation = trigger('menu', [
  transition('void => *', [style({ height: '50px' }), animate('.7s')]),
  transition('* => void', [animate('.7s ease-in', style({ height: '0px' }))]),
]);
export const slideAnim = trigger('moveSlide', [
  transition('void => *', [
    style({ transform: 'scaleY(.2)', top: '-20px', opacity: '0' }),
    animate('.3s'),
  ]),
  transition('* => void', [
    animate(
      '.2s ease-in',
      style({ opacity: '0', top: '20px', transform: 'scaleY(.1)' })
    ),
  ]),
]);
export const cartRemoving = trigger('remove', [
  transition('* => void', [
    animate('.3s ease-in', style({ transform: 'scale(.1)', opacity: '0' })),
  ]),
]);
export const show = trigger('show', [
  transition('void => *', [style({ opacity: '0' }), animate('1.5s')]),
]);
export const showPopup = trigger('showPopup', [
  transition('void => *', [style({ opacity: '0' }), animate('1s')]),
]);
export const bounceAnim = trigger('bounce', [
  transition('void => *', useAnimation(bounce)),
]);
export const ul = trigger('trigger', [
  transition('void => *', useAnimation(fadeInDown)),
]);
export const searchInput = trigger('inpt', [
  transition('void => *', useAnimation(bounceIn)),
]);
