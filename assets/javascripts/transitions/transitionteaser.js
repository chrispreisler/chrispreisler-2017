import Barba from 'barba.js'
import TimelineLite from 'gsap/TimelineLite'
import { animatePage } from '../animations/animatepage'
import { watcherProject } from '../watcher/watcherproject'
import { watcherTeaserList } from '../watcher/watcherteaserlist'

export const TransitionTeaser = Barba.BaseTransition.extend({
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
    const twoTeaser = _this.newContainer.querySelectorAll('.twoteaser__item')

    watcherProject(_this.newContainer)
    for (var i = 0; i < twoTeaser.length; ++i) {
      watcherTeaserList(twoTeaser[i], 'twoteaser__item')
    }
    _this.done()
  },

  valid: function (nextNamespace) {
    return nextNamespace === 'teaser'
  }
})
