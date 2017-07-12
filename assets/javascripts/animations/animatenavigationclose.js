import TimelineLite from 'gsap/TimelineLite'
import BezierEasing from 'bezier-easing'

export function animateNavigationClose () {
  window.console.log(' ')
  window.console.log('### Start Closing Navigation Animation')

  const tl = new TimelineLite({paused: true})
  const circleSize = Math.sqrt(window.innerHeight * window.innerHeight + window.innerWidth * window.innerWidth) * 2

  document.querySelector('.nav__btn__lines').classList.remove('nav__btn__lines--is-animating')

  tl.staggerFromTo(document.querySelectorAll('.nav__link'), 0.7,
    { autoAlpha: 1, yPercent: 0 },
    { autoAlpha: 0, yPercent: 25 },
    0.35)
  .set(document.querySelector('.nav'),
    { autoAlpha: 0, display: 'none' })
  .fromTo(document.querySelector('.nav__circle-bg'), 0.5,
    { width: circleSize, height: circleSize, ease: new Ease(BezierEasing(0.86, 0, 0.07, 1)) },
    { width: 0, height: 0, ease: new Ease(BezierEasing(0.86, 0, 0.07, 1)) })
  .set(document.querySelector('.nav__circle-bg'),
    { autoAlpha: 0 })
  .set(document.querySelector('body'),
    { className: '-=disable-scroll' })

  return tl
}
