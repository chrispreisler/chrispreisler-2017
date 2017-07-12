import BezierEasing from 'bezier-easing'
import TimelineLite from 'gsap/TimelineLite'

export function animatePage (object, duration) {
  const objectOverlay = document.querySelector('.page__overlay')
  const tl = new TimelineLite({paused: true})

  window.console.log('')
  window.console.log('### Start Page Overlay Animation ###')

  tl.set(objectOverlay,
    { autoAlpha: 1 })
  .to(objectOverlay, duration,
    { xPercent: 100, ease: new Ease(BezierEasing(0.645, 0.045, 0.355, 1)) })
  .set(object,
    { opacity: 0 })
  .to(objectOverlay, duration + 0.25,
    { xPercent: 200, ease: new Ease(BezierEasing(0.645, 0.045, 0.355, 1)) })
  .set(objectOverlay,
     { xPercent: 0, autoAlpha: 0})

  return tl
}
