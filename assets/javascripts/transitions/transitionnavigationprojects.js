import Barba from 'barba.js'
import TimelineLite from 'gsap/TimelineLite'
import { animatePage } from '../animations/animatepage'
import { animateNavigationClose } from '../animations/animatenavigationclose'
import { animateNavigation } from '../animations/animatenavigation'
import { watcherHome } from '../watcher/watcherhome'
import MobileMenu from '../components/mobilemenu'

export const TransitionNavigationProjects = Barba.BaseTransition.extend({
  start: function () {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this))
  },

  fadeOut: function () {
    var deferred = Barba.Utils.deferred()
    var tl = new TimelineLite({
      onComplete: function () {
        animateNavigation.reset()
        deferred.resolve()
      }
    })

    tl.add(animateNavigation.getAnimationReverse())
    tl.add(animatePage(this.oldContainer, 0.4).play())
    tl.set(this.oldContainer, { display: 'none' })
    tl.set(window, { scrollTo: 0 })

    return deferred.promise
  },

  fadeIn: function () {
    var _this = this

    watcherHome(_this.newContainer)
    _this.done()
  },

  valid: function (nextNamespace) {
    return nextNamespace === 'projects' && window.innerWidth <= 992
  }
})
