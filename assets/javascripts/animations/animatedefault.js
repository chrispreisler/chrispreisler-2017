import TweenLite from 'gsap/TweenLite'
import BezierEasing from 'bezier-easing'

export function animateDefault (object, duration) {
  return TweenLite.from(object, duration, {
    autoAlpha: 0,
    ease: new Ease(BezierEasing(.23,1,.32,1))
  })
}
