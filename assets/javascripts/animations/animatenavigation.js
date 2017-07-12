import TimelineLite from 'gsap/TimelineLite'
import BezierEasing from 'bezier-easing'

class AnimateNavigation {
  constructor () {
    window.console.log('Init AnimateNavigation')

    this.tl = new TimelineLite({paused: true})
    this.circleSize = Math.sqrt(window.innerHeight * window.innerHeight + window.innerWidth * window.innerWidth) * 2

    this.tl.set(document.querySelector('body'),
      { className: '+=disable-scroll' })
    .fromTo(document.querySelector('.nav__circle-bg'), 0.01,
      { autoAlpha: 0 },
      { autoAlpha: 1 })
    .fromTo(document.querySelector('.nav__circle-bg'), 0.5,
      { width: 0, height: 0, ease: new Ease(BezierEasing(0.86, 0, 0.07, 1)) },
      { width: this.circleSize, height: this.circleSize, ease: new Ease(BezierEasing(0.86, 0, 0.07, 1)) })
    .fromTo(document.querySelector('.nav'), 0.01,
      { autoAlpha: 0 },
      { autoAlpha: 1 })
    .staggerFromTo(document.querySelectorAll('.nav__link'), 0.7,
      { autoAlpha: 0, yPercent: 25 },
      { autoAlpha: 1, yPercent: 0 },
      0.35)
  }

  getAnimationReverse () {
    document.querySelector('.nav__btn__lines').classList.remove('nav__btn__lines--is-animating')
    return this.tl.reverse()
  }

  play () {
    this.tl.play()
  }

  reverse () {
    this.tl.reverse()
  }

  reset () {
    window.console.log('')
    window.console.log('### Reset Navigation Timeline to Start')
    this.tl.clear()
    this.constructor()
  }
}

export let animateNavigation = new AnimateNavigation()

/*export function animateNavigation () {
  window.console.log(' ')
  window.console.log('### Start Navigation Animation')

  const tl = new TimelineLite({paused: true})
  const circleSize = Math.sqrt(window.innerHeight * window.innerHeight + window.innerWidth * window.innerWidth) * 2

  document.querySelector('.nav__btn__lines').classList.remove('nav__btn__lines--is-animating')

  tl
  .set(document.querySelector('body'),
    { className: '+=disable-scroll' })
  .fromTo(document.querySelector('.nav__circle-bg'), 0.01,
    { autoAlpha: 0 },
    { autoAlpha: 1 })
  .fromTo(document.querySelector('.nav__circle-bg'), 0.5,
    { width: 0, height: 0, ease: new Ease(BezierEasing(0.86, 0, 0.07, 1)) },
    { width: circleSize, height: circleSize, ease: new Ease(BezierEasing(0.86, 0, 0.07, 1)) })
  .fromTo(document.querySelector('.nav'), 0.01,
    { autoAlpha: 0 },
    { autoAlpha: 1 })
  .staggerFromTo(document.querySelectorAll('.nav__link'), 0.7,
    { autoAlpha: 0, yPercent: 25 },
    { autoAlpha: 1, yPercent: 0 },
    0.35)

  window.console.log('### TimeLine Direction: ' + tl.reversed() + ' ###')

  return tl
}*/
