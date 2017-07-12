import TimelineLite from 'gsap/TimelineLite';
import { animateText } from './animatetext';
import { animateImage } from './animateimage';

export function aboutFadeIn(container) {
  const tl = new TimelineLite();

  tl.set(container, { autoAlpha: 1 });
  const headline = container.querySelector('.headline__hl');
  const image = container.querySelector('.fullimage__image');

  tl.add(animateText(headline, 'headline__hl', 0.4));
  tl.add(animateImage(image, 0.55), '-=0.75');

  return tl;
}
