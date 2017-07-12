import TweenLite from 'gsap/TweenLite'
import BezierEasing from 'bezier-easing'

export function animateLink (object, duration) {
  return TweenLite.from(object, duration, {
    xPercent: -20,
    opacity: 0,
    ease: new Ease(BezierEasing(.23,1,.32,1))
  })
}
