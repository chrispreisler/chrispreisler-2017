import TimelineLite from 'gsap/TimelineLite';
import { animateText } from './animatetext';
import { animateLink } from './animatelink';
import { animateHeader } from './animateheader';
import { animateImage } from './animateimage';

export function homeFadeIn(container) {
  const tl = new TimelineLite();
  const headline = container.querySelector('.largeteaser__hl');
  const subline = container.querySelector('.largeteaser__sl');
  //const image = container.querySelector('.largeteaser__image');
  const video = container.querySelector('.largeteaser__video-wrapper');
  const link = container.querySelector('.largeteaser__link');

  tl.set(container, { autoAlpha: 1 });
  tl.add(animateImage(video, 0.55, true));
  tl.add(animateText(headline, 'largeteaser__hl', 0.4), '-=0.3');
  tl.add(animateText(subline, 'largeteaser__sl', 0.4));
  tl.add(animateLink(link, 1))


  return tl;
}
