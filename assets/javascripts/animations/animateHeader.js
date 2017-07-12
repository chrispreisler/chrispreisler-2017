import TweenLite from 'gsap/TweenLite'
import BezierEasing from 'bezier-easing'

export function animateHeader (className, duration) {
  const object = document.querySelector('.' + className)

  return TweenLite.from(object, duration, {
    yPercent: -40,
    opacity: 0,
    ease: new Ease(BezierEasing(.23,1,.32,1))
  })
}
