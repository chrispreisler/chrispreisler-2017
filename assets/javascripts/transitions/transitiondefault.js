import Barba from 'barba.js'
import TimelineLite from 'gsap/TimelineLite'
import { animatePage } from '../animations/animatepage'
import { watcherTeaserList } from '../watcher/watcherteaserlist'

export const TransitionDefault = Barba.BaseTransition.extend({
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

    //tl.add(animatePage(this.oldContainer, 0.4).play())
    tl.to(this.oldContainer, 0.4, { autoAlpha: 0 })
    tl.set(this.oldContainer, { display: 'none' })
    tl.set(window, { scrollTo: 0 })

    return deferred.promise
  },

  fadeIn: function () {
    var _this = this
    var tl = new TimelineLite({
      onComplete: function () {
        _this.done()
      }
    })

    if (this.newContainer.querySelector('.teaser')) {
      const teaserItems = document.querySelectorAll('.teaser__item')
      for (let i = 0; i < teaserItems.length; ++i) {
        watcherTeaserList(teaserItems[i], 'teaser__item')
      }
    }

    if (this.newContainer.querySelector('.twoteaser')) {
      const teaserItems = document.querySelectorAll('.twoteaser__item')
      for (let i = 0; i < teaserItems.length; ++i) {
        watcherTeaserList(teaserItems[i], 'twoteaser__item')
      }
    }

    tl.to(this.newContainer, 0.4, { autoAlpha: 1 })
  }
})
