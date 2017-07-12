import TimelineLite from 'gsap/TimelineLite';
import { animateText } from './animatetext';
import { animateImage } from './animateimage';

export function projectFadeIn(container) {
  const tl = new TimelineLite();
  const headline = container.querySelector('.headline__hl');
  const subline = container.querySelector('.headline__sl');
  const image = container.querySelector('.project-intro__image');

  tl.set(container, { autoAlpha: 1 });
  tl.add(animateText(headline, 'headline__hl', 0.4));
  tl.add(animateText(subline, 'headline__hl', 0.4));
  tl.add(animateImage(image, 0.55), '-=0.75');

  return tl;
}
