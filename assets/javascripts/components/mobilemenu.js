import BezierEasing from 'bezier-easing'
import TimelineLite from 'gsap/TimelineLite'
import TweenLite from 'gsap/TweenLite'
import { animateNavigation } from '../animations/animatenavigation'

export default class MobileMenu {
  constructor () {
    window.console.log(' ')
    window.console.log('### Start Navigation Constructor ###')

    this.isOpen = false

    var throttle = function (type, name, obj) {
      obj = obj || window
      var running = false
      var func = function () {
        if (running) { return }
        running = true
        requestAnimationFrame(function () {
          obj.dispatchEvent(new CustomEvent(name))
          running = false
        })
      }
      obj.addEventListener(type, func)
    }

    throttle('resize', 'optimizedResize')
    window.addEventListener('optimizedResize', evt => this.onResize(evt))

    this.initTimeline()
    this.initMenu()

    document.querySelector('.nav__btn').addEventListener('click', evt => this.onClickOpen(evt))
  }

  initTimeline () {
    window.console.log('')
    window.console.log('### Init Timeline ###')

    document.querySelector('body').classList.remove('disable-scroll')

    //animateNavigation.play()
    //this.tl = new TimelineLite({paused: true})
    //this.tl.add(animateNavigation().play())
  }

  initMenu () {
    window.console.log('')
    window.console.log('### Init Navigation ###')

    let windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    const isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent && !navigator.userAgent.match('CriOS');

    if (isSafari) {
      windowWidth -= 16
    }

    if (windowWidth < 992) {
      window.console.log('### Small Window: ' + windowWidth + ' ###')
      this.circleSize = Math.sqrt(window.innerHeight * window.innerHeight + window.innerWidth * window.innerWidth) * 2

      if (this.isOpen === false) {
        TweenLite.set(document.querySelectorAll('.nav__link'),
          { autoAlpha: 0, yPercent: 25 })
        TweenLite.set(document.querySelector('.nav'),
          { autoAlpha: 0 })
      } else {
        TweenLite.set(document.querySelector('.nav__circle-bg'),
          { width: this.circleSize, height: this.circleSize })
      }
    } else {
      window.console.log('### Large Window: ' + windowWidth + '###')
      if (this.isOpen === true) {
        TweenLite.set(document.querySelector('.nav__circle-bg'),
          { width: 0, height: 0 })
      }
      TweenLite.set(document.querySelectorAll('.nav__link'),
        { autoAlpha: 1, yPercent: 0 })
      TweenLite.set(document.querySelector('.nav'),
        { autoAlpha: 1, display: 'block' })
    }
  }

  onResize (e) {
    window.console.log(' ')
    window.console.log('### Resize Window ###')

    this.initMenu()
  }

  onClickOpen (e) {
    if (this.isOpen === false) {
      window.console.log(' ')
      window.console.log('### Open Navigation ###')
      document.querySelector('.nav__btn__lines').classList.add('nav__btn__lines--is-animating')
      animateNavigation.play()
      this.isOpen = true
    } else {
      window.console.log(' ')
      window.console.log('### Close Navigation ###')
      document.querySelector('.nav__btn__lines').classList.remove('nav__btn__lines--is-animating')
      animateNavigation.reverse()
      this.isOpen = false
    }
  }

  getIsOpen () {
    return this.isOpen
  }

  setIsOpen (isOpen) {
    this.isOpen = isOpen
  }
}
