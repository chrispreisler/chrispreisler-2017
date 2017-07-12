import Barba from 'barba.js'
import TimelineLite from 'gsap/TimelineLite'
import { animatePage } from '../animations/animatepage'
import { watcherAbout } from '../watcher/watcherabout'
import { watcherAboutImage } from '../watcher/watcheraboutimage'

export const TransitionAbout = Barba.BaseTransition.extend({
  start: function () {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this))
  },

  fadeOut: function () {
    var deferred = Barba.Utils.deferred()
    var tl = new TimelineLite({
      onComplete: function () {
        deferred.resolve()
      }
    })

    tl.add(animatePage(this.oldContainer, 0.4).play())
    tl.set(this.oldContainer, { display: 'none' })
    tl.set(window, { scrollTo: 0 })

    return deferred.promise
  },

  fadeIn: function () {
    var _this = this

    watcherAbout(_this.newContainer)
    watcherAboutImage(_this.newContainer.querySelector('.fullimage'))
    _this.done()
  },

  valid: function (nextNamespace) {
    return nextNamespace === 'about'
  }
})
