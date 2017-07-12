import TimelineLite from 'gsap/TimelineLite'
import { animateText } from '../animations/animatetext'
import { animateImage } from '../animations/animateimage'

export function watcherTeaserList (object, className, startDelay = 0) {
  const scrollMonitor = require('../utils/scrollMonitor')
  var elementWatcher = scrollMonitor.create(object)

  elementWatcher.enterViewport(function () {
    window.console.log(' ')
    window.console.log('### Start Teaser Animation ###')

    const tl = new TimelineLite({ delay: startDelay })
    const headline = object.querySelector('.' + className + '__hl')
    const subline = object.querySelector('.' + className + '__sl')
    const image = object.querySelector('.' + className + '__hover')

    tl.set(object, { autoAlpha: 1 })
    tl.add(animateImage(image, 0.55))
    tl.add(animateText(headline, className + '__hl', 0.4), '-=0.75')
    tl.add(animateText(subline, className + '__sl', 0.4), '-=0.5')
    tl.play()

    elementWatcher.destroy()
  })
}
