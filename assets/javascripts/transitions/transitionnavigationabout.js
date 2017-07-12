import Barba from 'barba.js'
import TimelineLite from 'gsap/TimelineLite'
import { animatePage } from '../animations/animatepage'
// import { animateNavigationClose } from '../animations/animatenavigationclose'
import { animateNavigation } from '../animations/animatenavigation'
import { watcherAbout } from '../watcher/watcherabout'
import { watcherAboutImage } from '../watcher/watcheraboutimage'

export const TransitionNavigationAbout = Barba.BaseTransition.extend({
  start: function () {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this))
  },

  fadeOut: function () {
    var deferred = Barba.Utils.deferred()
    var tl = new TimelineLite({
      paused: true,
      onComplete: function () {
        animateNavigation.reset()
        deferred.resolve()
      }
    })

    tl.add(animateNavigation.getAnimationReverse())
    tl.add(animatePage(this.oldContainer, 0.4).play())
    tl.set(this.oldContainer, { display: 'none' })
    tl.set(window, { scrollTo: 0 })
    tl.play();

    return deferred.promise
  },

  fadeIn: function () {
    var _this = this

    watcherAbout(_this.newContainer)
    watcherAboutImage(_this.newContainer.querySelector('.fullimage'))
    _this.done()
  },

  valid: function (nextNamespace) {
    return nextNamespace === 'about' && window.innerWidth <= 992
  }
})
