import Barba from 'barba.js'
import TimelineLite from 'gsap/TimelineLite'
import { animatePage } from '../animations/animatepage'
import { watcherHome } from '../watcher/watcherhome'
import { watcherTeaserList } from '../watcher/watcherteaserlist'

export const TransitionHome = Barba.BaseTransition.extend({
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
    const teaserItems = _this.newContainer.querySelectorAll('.teaser__item')
    window.console.log(teaserItems)

    watcherHome(_this.newContainer)
    for (var i = 0; i < teaserItems.length; ++i) {
      watcherTeaserList(teaserItems[i], 'teaser__item')
    }
    _this.done()
  },

  valid: function (nextNamespace) {
    return nextNamespace === 'projects'
  }
})
